import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
import PyPDF2
import pytesseract
import re
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
import numpy as np
from PIL import Image
from random import shuffle, choice
import os
import boto3
from pdf2image import convert_from_path, convert_from_bytes
import textract
import pickle


def extract_text(path):
    pdf_file = open(path, 'rb')
    pdf_reader = PyPDF2.PdfReader(pdf_file)

    # Extract text from all pages in the PDF file
    text = ''
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()

    pdf_file.close()

    # Lowercase the text
    text = text.lower()

    # Remove punctuation
    # text = re.sub(r'[^\w\s]', '', text)

    pattern_from_colon_to_dollar = r"¢\s*([\d,]+\.\d+).*total"
    match = re.search(pattern_from_colon_to_dollar, text.strip())
    print(text)
    if match:
        matched_value2 = match.group(1)
        print("Matched value:", matched_value2)
    else:
        print("No match found.")

    return text


def train_model():
    # Load the data and split it into training and validation setsdffs
    data = pd.read_csv(
        '/Users/sergio/Documents/School/fileAnalyzer/backend/Gen Functions/invoicesCSV.csv', sep=';')

    # print(data.head(5))
    # data.info()
    # X_train, X_val, y_train, y_val = train_test_split(
    #    data['id'].astype(str), data['doc_type'], test_size=0.2, random_state=42)

    # Concatenate the encoded 'name' column with the other input features
    le = LabelEncoder()
    data['first_name'] = le.fit_transform(data['first_name'])
    data['last_name'] = le.fit_transform(data['last_name'])
    data['email'] = le.fit_transform(data['email'])
    data['amount'] = le.fit_transform(data['amount'])
    data['invoice_date'] = le.fit_transform(data['invoice_date'])
    data['address'] = le.fit_transform(data['address'])
    data['city'] = le.fit_transform(data['city'])
    data['job'] = le.fit_transform(data['job'])
    data['description'] = le.fit_transform(data['description'])
    data['items'] = le.fit_transform(data['items'])

    # Split the data into training and testing sets

    # Split the data into training and testing sets
    X = data.drop('doc_type', axis=1)  # input features
    y = data['doc_type']  # target variable
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42)

    # Train a logistic regression model on the training set
    clf = LogisticRegression()
    clf.fit(X_train, y_train)

    # Make predictions on the testing set
    y_pred = clf.predict(X_test)

    # Evaluate the performance of the model using accuracy score
    accuracy = accuracy_score(y_test, y_pred)
    filename = 'finalized_model.sav'

    pickle.dump(clf, open(filename, 'wb'))

    # load the model from disk
    loaded_model = pickle.load(open(filename, 'rb'))

    y_pred2 = loaded_model.predict(X_test)
    accuracy2 = accuracy_score(y_test, y_pred2)
    print("Accuracy:", accuracy)
    print("Accuracy: y_pred2", accuracy2)


def label_img(name):
    if name == 'incoming':
        return np.array([1, 0])
    elif name == 'outgoing':
        return np.array([0, 1])


def load_images():
    IMAGE_DIRECTORY = '/Users/sergio/Documents/School/fileAnalyzer/backend/Gen Functions/train_images/'
    IMAGE_SIZE = 256
    print("Loading images...")
    train_data = []
    directories = next(os.walk(IMAGE_DIRECTORY))[1]

    for dirpath, dirnames, filenames in os.walk(IMAGE_DIRECTORY):
        for filename in filenames:
            # Check if the file is an image file (e.g., JPEG, PNG, etc.)
            if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp')):
                # Do something with the image file (e.g., load it, process it, etc.)
                image_path = os.path.join(dirpath, filename)

                print('Processing image:', image_path)
                read_image(image_path)

    return train_data


def read_image(document_name):

    # Create a Textract client object
    textract = boto3.client('textract')

    # Load the image file into memory
    # with open('/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png', 'rb') as file:
    #    image_data = file.read()
    my_id = "1-1124-0589"
    labels = [{"Query": "What is the total", "Text": "Total"},
              {"Query": "What is the date", "Text": "Date"},
              {"Query": "Whats is the cedula juridica or NIF", "Text": "NIF"},
              {"Query": "How much is on taxes or tributos or tributo", "Text": "Taxes"},
              {"Query": "What is the address or direccion", "Text": "Address"},
              {"Query": "What is the name", "Text": "Nombre"}]
    labelsr = [
        {"Query": "Whats is the cedula juridica or NIF", "Text": "Address"}]
    options = []
    for label in labels:
        options.append(
            {"Text": label["Query"], "Alias": label["Text"]+"Alias"})

    print(options)
    # document_name = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png'
    # Open the file and read its contents
    with open(document_name, 'rb') as document:
        # Call Amazon Textract to extract the text from the file
        response = textract.analyze_document(Document={'Bytes': document.read()}, FeatureTypes=[
            'QUERIES'], QueriesConfig={"Queries": options})
    field_name = 'TOTAL'

    # Search for the field you want to extract
    total_value = 0
    total_index = 0
    return_str = "Entrante"

    print(response['Blocks'])
    for item in response['Blocks']:
        try:
            # print(item)

            if item['BlockType'] == 'QUERY_RESULT':

                # Get the value of the field
                # print(f"{field_name}' found")
                # print(f"{item}'")
                for sub_item in item:
                    if sub_item == 'Text':
                        total_value = item.get('Text')
                        if item.get('Text') == my_id:
                            return_str = "Saliente"
                        print(
                            f"El {labels[total_index]['Text']} de esta factura es : {item.get('Text')}")

                # print(f"{response['Blocks'][total_index]}'")
                # total_value = item['Geometry']['BoundingBox']
                # break
                total_index = total_index+1
        except KeyError:
            print(f"{field_name}'s age is unknown.")

    # Print the value of the field

    print(return_str)


def read_image_pdf(document_name):

    # Create a Textract client object
    textract = boto3.client('textract')

    # Load the image file into memory
    # with open('/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png', 'rb') as file:
    #    image_data = file.read()
    my_id = "1-1124-0589"
    labels = [{"Query": "What is the total", "Text": "Total"},
              {"Query": "What is the date", "Text": "Date"},
              {"Query": "Whats is the cedula juridica or NIF", "Text": "NIF"},
              {"Query": "How much is on taxes or tributos or tributo", "Text": "Taxes"},
              {"Query": "What is the address or direccion", "Text": "Address"},
              {"Query": "What is the name", "Text": "Nombre"}]
    labelsr = [
        {"Query": "Whats is the cedula juridica or NIF", "Text": "Address"}]
    options = []
    for label in labels:
        options.append(
            {"Text": label["Query"], "Alias": label["Text"]+"Alias"})

    print(options)
    # document_name = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png'
    # Open the file and read its contents
    document = open(document_name, 'rb')
    # Call Amazon Textract to extract the text from the file
    response = textract.start_document_text_detection(
        Document={'Bytes': document.read()})
    field_name = 'TOTAL'

    # Search for the field you want to extract
    total_value = 0
    total_index = 0
    return_str = "Entrante"

    # Print the extracted text
    print(response['Text'])


file_path = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.pdf'
file_path_nucleo = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/facturanucleo.pdf'
file_path_no = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/Actividad3.pdf'
file_image = "/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png"


def extractPdfText(filePath=''):
    labels = [{"Query": "What is the total", "Text": "Total"},
              {"Query": "What is the date", "Text": "Date"},
              {"Query": "Whats is the cedula juridica or NIF", "Text": "NIF"},
              {"Query": "How much is on taxes or tributos or tributo", "Text": "Taxes"},
              {"Query": "What is the address or direccion", "Text": "Address"},
              {"Query": "What is the name", "Text": "Nombre"}]
    labelsr = [
        {"Query": "Whats is the cedula juridica or NIF", "Text": "Address"}]
    options = []
    for label in labels:
        options.append(
            {"Text": label["Query"], "Alias": label["Text"]+"Alias"})

    print(f"Opening file at {filePath}")
    pdfFileReader = PyPDF2.PdfReader(filePath)
    totalPages = len(pdfFileReader.pages)
    print(f"This pdf contains {totalPages} pages.")
    currentPageNumber = 0
    text = ''
    while (currentPageNumber < totalPages):
        pdfPage = pdfFileReader.pages[currentPageNumber]
        text = text + pdfPage.extract_text()
        currentPageNumber += 1

    # if (text == ''):

    print("options")
    print(options)
    text2 = textract.process(
        filePath, moethod='tesseract', encoding='utf-8', FeatureTypes=[
            'QUERIES'], QueriesConfig={"Queries": options})

    print(text)
    print(text2)
    return text


def convert_process_pdf_to_image(file_path):
    images = convert_from_path(file_path)
    print(images)
    images[0].save('new_folder\output.jpg', 'JPEG')
    read_image('new_folder\output.jpg')
# extract_text(file_path)
# extract_text(file_path_no)
# load_images()
# read_image(file_image)


train_model()
# convert_process_pdf_to_image(file_path)
# convert_process_pdf_to_image(file_path_nucleo)
# read_image(file_image)
#
