import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
import PyPDF2
import pytesseract
import re


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
    # match = re.search(r'\b\d+(\.\d+)?(?=\s*total)', text)
    # pattern = re.compile('¢\s*([\d,]+\.\d+).*?\btotal\b')
    my_string = '¢ 21,875.00total por pagarhistorial '
    pattern2 = re.compile('¢.*+')
    match2 = re.match(pattern2, my_string)
    pattern = re.compile('¢[a-z]+')
    matches = re.match(pattern2, text)
    print("total_amount")
    # print(text)
    print(match2)
    print("total_amount matches")
    # print(text)
    print(matches)
    # print(text)
    # print(text)
    return text


# Load the data and split it into training and validation sets
data = pd.read_csv(
    '/Users/sergio/Documents/School/fileAnalyzer/backend/Gen Functions/invoicesCSV.csv', sep=';')

print(data.head(5))
data.info()
X_train, X_val, y_train, y_val = train_test_split(
    data['id'].astype(str), data['doc_type'], test_size=0.2, random_state=42)


# Create a CountVectorizer to convert the text into features
vectorizer = CountVectorizer(lowercase=False)

# Fit the vectorizer on the training data
# print(X_train)
vectorizer.fit(X_train)

# Transform the text into features for both the training and validation data
X_train = vectorizer.transform(X_train)
X_val = vectorizer.transform(X_val)

# Train a logistic regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Evaluate the model on the validation data
accuracy = model.score(X_val, y_val)
print(f'Validation accuracy: {accuracy:.2f}')


# Load the new invoice file and extract the text
text = extract_text('/Users/sergio/Downloads/factura.pdf')
# Convert the text into features using the CountVectorizer

# print(text)
Xpredict = vectorizer.transform([text])

# Predict the label of the invoice using the trained model
label = model.predict(Xpredict)[0]
print(f'Prediction: {label}')
