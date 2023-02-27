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


def label_img(name):
    if name == 'incoming':
        return np.array([1, 0])
    elif name == 'outgoing':
        return np.array([0, 1])


def load_images(IMAGE_DIRECTORY):

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


def convert_process_pdf_to_image(file_path):
    images = convert_from_path(file_path)
    print(images)
    images[0].save('new_folder\output.jpg', 'JPEG')
    read_image('new_folder\output.jpg')


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
