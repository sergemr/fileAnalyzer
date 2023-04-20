from imagesClass import *
import pickle
import textract
from pdf2image import convert_from_path, convert_from_bytes
import boto3
import os
from random import shuffle, choice
from PIL import Image
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import OneHotEncoder
import re
import pytesseract
import PyPDF2
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
import pandas as pd


def train_model():
    # Load the data and split it into training and validation setsdffs
    data = pd.read_csv(
        '/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/invoicesCSV.csv', sep=';')

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

    return clf
