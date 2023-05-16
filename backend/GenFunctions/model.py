import pickle
import joblib


import os
from random import shuffle, choice

import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import OneHotEncoder
import re

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
    data['product_id'] = le.fit_transform(data['product_id'])
    data['qty'] = le.fit_transform(data['qty'])

    data['amount'] = le.fit_transform(data['amount'])
    data['invoice_date'] = le.fit_transform(data['invoice_date'])
    data['address'] = le.fit_transform(data['address'])
    data['city'] = le.fit_transform(data['city'])
    data['stock_code'] = le.fit_transform(data['stock_code'])
    data['job'] = le.fit_transform(data['job'])
    data['customer_id'] = le.fit_transform(data['customer_id'])
    data['corporate_id'] = le.fit_transform(data['corporate_id'])
    data['doc_type'] = le.fit_transform(data['doc_type'])
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
    # classifier = LogisticRegression(fit_intercept=False)
    clf.fit(X_train, y_train)

    # Make predictions on the testing set
    y_pred = clf.predict(X_test)
    print("Accuracy y_pred:", y_pred)
    # Evaluate the performance of the model using accuracy score
    accuracy = accuracy_score(y_test, y_pred)
    filename = 'finalized_model.sav'

    # pickle.dump(clf, open(filename, 'wb'))
    joblib.dump(clf, 'modelPredict.pkl')
    joblib.dump(clf, 'logistic_regression_model.joblib')
    # load the model from disk
    # loaded_model = pickle.load(open(filename, 'rb'))
    loaded_model = joblib.load('modelPredict.pkl')
    y_pred2 = loaded_model.predict(X_test)
    accuracy2 = accuracy_score(y_test, y_pred2)
    print("Accuracy:", accuracy)
    print("Accuracy: y_pred2", accuracy2)
    input_obj = {
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@example.com",
        "product_id": "123",
        "qty": "2",
        "amount": "99.99",
        "invoice_date": "2022-05-05",
        "address": "123 Main St",
        "city": "Anytown",
        "stock_code": "ABC123",
        "job": "Engineer",
        "customer_id": "456",
        "corporate_id": "789",
        "doc_type": "0",
        "description": "Product description",
        "items": "1"
    }
    feature_names = ['first_name', 'last_name', 'email', 'product_id', 'qty', 'amount', 'invoice_date',
                     'address', 'city', 'stock_code', 'job', 'customer_id', 'corporate_id', 'doc_type', 'description', 'items']

    # Preprocess the input object to match the input features of the trained model
    # Preprocess the input object to match the input features of the trained model
    le = LabelEncoder()
    le.fit(feature_names)

    first_name = le.fit_transform([input_obj['first_name']])[0]
    last_name = le.fit_transform([input_obj['last_name']])[0]
    email = le.fit_transform([input_obj['email']])[0]
    product_id = le.fit_transform([input_obj['product_id']])[0]
    qty = le.fit_transform([input_obj['qty']])[0]
    amount = le.fit_transform([input_obj['amount']])[0]
    invoice_date = le.fit_transform([input_obj['invoice_date']])[0]
    address = le.fit_transform([input_obj['address']])[0]
    city = le.fit_transform([input_obj['city']])[0]
    stock_code = le.fit_transform([input_obj['stock_code']])[0]
    job = le.fit_transform([input_obj['job']])[0]
    customer_id = le.fit_transform([input_obj['customer_id']])[0]
    corporate_id = le.fit_transform([input_obj['corporate_id']])[0]
    doc_type = le.fit_transform([input_obj['doc_type']])[0]
    description = le.fit_transform([input_obj['description']])[0]
    items = le.fit_transform([input_obj['items']])[0]
    preprocessed_input = []

    input_features = np.array([first_name, last_name, email, product_id, qty, amount, invoice_date, address,
                              city, stock_code, job, customer_id, corporate_id, doc_type, description, items]).reshape(1, -1)

    # Make a prediction using the preprocessed input
    # input_features = np.array(preprocessed_input).reshape(1, -1)
    prediction = clf.predict(input_features)[0]

    # Print the prediction
    print("Prediction: clf", prediction)

    return clf
