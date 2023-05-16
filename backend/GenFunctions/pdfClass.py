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
from GenFunctions.ImagesClass import read_image, read_image_pdf


def extract_text(path):
    pdf_file = open(path, 'rb')
    print("pdf_file")
    print(pdf_file)
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

    text2 = textract.process(
        filePath, moethod='tesseract', encoding='utf-8', FeatureTypes=[
            'QUERIES'], QueriesConfig={"Queries": options})

    response = {"TextParsed": text, "TextParsedResponse": text2}
    return response


def convert_process_pdf_to_image(file_path):
    images = convert_from_path(file_path)
    print(images)
    images[0].save('new_folder\output.jpg', 'JPEG')
    read_image('new_folder\output.jpg')
