import pickle
import joblib


import os
from random import shuffle, choice

import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import OneHotEncoder, StandardScaler
import re

from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
import pandas as pd
from sklearn.compose import ColumnTransformer


from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
input_objDef = {
    "invo_type": "Factura Electrónica",
    "doc_number": "VF-21-1767",
    "product_id": "VF-21-1767",
    "invoice_date": "17/11/2021",
    "invoice_due_date": "17/11/2021",
    "qty": "2",
    "description": "cargos por compra",
    "business_id": "IVA ESW0184081H",
    "business_name":  "Amazon EU S.à r.l",
    "business_phone": "0",
    "business_email":    "0",
    "business_address": "Calle de Ramírez de Prado 5 28045 Madrid",
    "business_country":     "España",
    "client_id":      "111240589",
    "first_name":      "Renato de Lauretiis",
    "last_name":  "de Lauretiis",
    "email":    "dsevilla@promerica.fi.cr",
    "client_address":  "TRAVESIA DE SOMOSIERRA, 11 4B",
    "client_country":   "España",
    "currency":  "euros",
    "subtotal":   "69.5",
    "iva":     "21",
    "iva2": "0",
    "taxes": "0",
    "taxes2": "0",
    "other": "0",
    "discount": "0",
    "amount": "79",
    "payment_type": "TIQUETE DE CONTADO",
    "payment_method": "Contado",
    "doc_type": "entrante"
}


input_objDefSaliente = {
    "invo_type": "Factura Electrónica",
    "doc_number": "1000100000000000",
    "product_id": "1000100000000000",
    "invoice_date": "24/4/2022",
    "invoice_due_date": "0",
    "qty": "21",
    "description": "membresia",
    "business_id": "3101716050",
    "business_name":  "Seating and Services",
    "business_phone": "0",
    "business_email":    "0",
    "business_address": "San José, San Sebastian de Repuestos Conejo 10 Metros Oeste",
    "business_country":     "Costa Rica",
    "client_id":      "801100138",
    "first_name":      "DEYLIN YANELQUI SEVILLA SEVILLA	DEYLIN YANELQUI",
    "last_name":  "SEVILLA SEVILLA",
    "email":    "ediaz@gmail.com",
    "client_address":  "Sabanilla Montes de Oca	Costa Rica",
    "client_country":   "0",
    "currency":  "COLONES",
    "subtotal":   "66.371,69",
    "iva":     "4",
    "iva2": "0",
    "taxes": "8628,36",
    "taxes2": "0",
    "other": "0",
    "discount": "0",
    "amount": "75000,01",
    "payment_type": "Contado	Tarjeta",
    "payment_method": "Contado",
    "doc_type": "saliente"
}
# Entrante			164	23/06/1984	23/06/1984	6				email@example.com			5			0	0	0	0	0	0	74,53
input_objNuevoSaliente = {
    "invo_type": "Orden Servicios",
    "doc_number": "94859461",
    "product_id": "164",
    "invoice_date": "223/06/1984",
    "invoice_due_date": "23/06/1984",
    "qty": "6",
    "description": "servicios profesionales	",
    "business_id": "888-545474",
    "business_name":  "Amenity horticulturist",
    "business_phone": "40824145",
    "business_email":    "email@example.com",
    "business_address": "Jenniferstad	",
    "business_country":     "usa",
    "client_id":      "0",
    "first_name":      "Troy Brown",
    "last_name":  "Angela Hoffman",
    "email":    "lnunez@example.com",
    "client_address":  "2410 Andrade Fields",
    "client_country":   "USA",
    "currency":  "usd",
    "subtotal":   "74,53",
    "iva":    "0",
    "iva2": "0",
    "taxes": "0",
    "taxes2": "0",
    "other": "0",
    "discount": "0",
    "amount": "74,53",
    "payment_type": "credito",
    "payment_method": "banco",
    "doc_type": "Entrante"
}


def train_modelOld():
    # Load the data and split it into training and validation setsdffs
    data = pd.read_csv(
        '/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/invoicesCSV2.csv', sep=';')

    # print(data.head(5))
    # data.info()
    # X_train, X_val, y_train, y_val = train_test_split(
    #    data['id'].astype(str), data['doc_type'], test_size=0.2, random_state=42)

    # Concatenate the encoded 'name' column with the other input features

    # data = data.fillna(data.mean())

    le = LabelEncoder()
    data['first_name'] = le.fit_transform(data['first_name'])
    data['last_name'] = le.fit_transform(data['last_name'])
    data['email'] = le.fit_transform(data['email'])
    data['product_id'] = le.fit_transform(data['product_id'])
    data['qty'] = le.fit_transform(data['qty'])

    data['amount'] = le.fit_transform(data['amount'])
    data['subtotal'] = le.fit_transform(data['subtotal'])
    data['discount'] = le.fit_transform(data['discount'])
    data['invoice_date'] = le.fit_transform(data['invoice_date'])
    data['invoice_due_date'] = le.fit_transform(data['invoice_due_date'])
    data['client_address'] = le.fit_transform(data['client_address'])
    data['client_country'] = le.fit_transform(data['client_country'])
    data['currency'] = le.fit_transform(data['currency'])
   # data['city'] = le.fit_transform(data['city'])
   # data['stock_code'] = le.fit_transform(data['stock_code'])
   # data['job'] = le.fit_transform(data['job'])
    data['client_id'] = le.fit_transform(data['client_id'])
    data['business_id'] = le.fit_transform(data['business_id'])
    data['business_name'] = le.fit_transform(data['business_name'])
    data['business_phone'] = le.fit_transform(data['business_phone'])
    data['business_email'] = le.fit_transform(data['business_email'])
    data['business_address'] = le.fit_transform(data['business_address'])
    data['business_country'] = le.fit_transform(data['business_country'])
    data['doc_type'] = le.fit_transform(data['doc_type'])
    data['iva'] = le.fit_transform(data['iva'])
    data['iva2'] = le.fit_transform(data['iva2'])
    data['taxes'] = le.fit_transform(data['taxes'])
    data['taxes2'] = le.fit_transform(data['taxes2'])
    data['other'] = le.fit_transform(data['other'])
    data['doc_number'] = le.fit_transform(data['doc_number'])
    data['invo_type'] = le.fit_transform(data['invo_type'])
    data['payment_type'] = le.fit_transform(data['payment_type'])
    data['payment_method'] = le.fit_transform(data['payment_method'])
    data['description'] = le.fit_transform(data['description'])

    # Split the data into training and testing sets

    # Split the data into training and testing sets
    X = data.drop('doc_type', axis=1)  # input features
    y = data['doc_type']  # target variable
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.4, random_state=42)

    # Train a logistic regression model on the training set
    # clf = LogisticRegression()
    clf = LogisticRegression(fit_intercept=False)
    clf.fit(X_train, y_train)

    # Make predictions on the testing set
    y_pred = clf.predict(X_test)
    print("Accuracy y_pred:", y_pred)
    # Evaluate the performance of the model using accuracy score
    accuracy = accuracy_score(y_test, y_pred)
    filename = 'finalized_model.sav'

    # pickle.dump(clf, open(filename, 'wb'))
    joblib.dump(clf, 'modelPredict.pkl')
    # load the model from disk
    # loaded_model = pickle.load(open(filename, 'rb'))
    loaded_model = joblib.load('modelPredict.pkl')
    y_pred2 = loaded_model.predict(X_test)
    accuracy2 = accuracy_score(y_test, y_pred2)
    print("Accuracy:", accuracy)
    print("Accuracy: y_pred2", accuracy2)
    input_obj = {
        "first_name": "Sergio",
        "last_name": "Morales",
        "email": "sergemr@gmail.com",
        "product_id": "123",
        "client_id": "111240589t",  # !!@
        "business_id": "123Corp",  # !!@
        "business_name": "23Corp",  # !!@
        "business_phone": "123456789",  # !!@
        "business_email": "23Corp@email.com",  # !!@
        "qty": "2",
        "amount": "99.99",
        "subtotal": "99.99",  # !
        "discount": "9",  # !
        "taxes": "0.15",  # !
        "iva": "0.99",  # !
        "taxes2": "0",  # !
        "iva2": "0",  # !
        "other": "0",  # !
        "invoice_date": "2022-05-05",
        "invoice_due_date": "2022-05-05",  # !!@
        "business_address": "123 Main St",  # !
        "client_address": "123 Main St",  # !
        "business_country": "costa rica",  # !
        "client_country": "costa rica",  # !
        "currency": "123 Main St",  # !\
        "payment_type": "Contado",  # !\
        "payment_method": "Tarjeta",  # !
        # "city": "Anytown",
        # "stock_code": "ABC123",
        # "job": "Engineer",


        "doc_type": "saliente",
        "doc_number": "saliente",  # !!@
        "invo_type": "Factura Electrónica",  # /,
        "description": "Product description",
        "items": "1"
    }
    input_obj1 = {
        "first_name": "Seating and Services",
        "last_name": "Seating and Services",
        "email": "sergemr@gmail.com",
        "product_id": "123",
        "client_id": "111240589t",  # !!@
        "business_id": "3101716050",  # !!@
        "business_name": "Seating and Service",  # !!@
        "business_phone": "123456789",  # !!@
        "business_email": "23Corp@email.com",  # !!@
        "qty": "2",
        "amount": "99.99",
        "subtotal": "99.99",  # !
        "discount": "9",  # !
        "taxes": "0.15",  # !
        "iva": "0.99",  # !
        "taxes2": "0",  # !
        "iva2": "0",  # !
        "other": "0",  # !
        "invoice_date": "2022-05-05",
        "invoice_due_date": "2022-05-05",  # !!@
        "business_address": "123 Main St",  # !
        "client_address": "123 Main St",  # !
        "business_country": "costa rica",  # !
        "client_country": "costa rica",  # !
        "currency": "123 Main St",  # !\
        "payment_type": "Contado",  # !\
        "payment_method": "Tarjeta",  # !
        # "city": "Anytown",
        # "stock_code": "ABC123",
        # "job": "Engineer",


        "doc_type": "Entrante",
        "doc_number": "Entrante",  # !!@
        "invo_type": "Factura Electrónica",  # /,
        "description": "Product description",
        "items": "1"
    }

    feature_names = ['first_name', 'last_name', 'email', 'product_id', 'client_id', 'business_id', 'business_name', 'business_phone', 'business_email',
                     'qty', 'amount', 'subtotal', 'discount', 'taxes', 'iva', 'taxes2', 'iva2', 'other', 'invoice_date', 'invoice_due_date', 'business_address', 'client_address', 'business_country',
                     'client_country', 'currency', 'payment_type', 'payment_method',
                     'doc_type', 'doc_number', 'invo_type', 'description', 'items']

    # Preprocess the input object to match the input features of the trained model
    # Preprocess the input object to match the input features of the trained model
    le = LabelEncoder()
    le.fit(feature_names)
    print("doc type", le.fit_transform([input_obj['doc_type']]))

    first_name = le.fit_transform([input_obj['first_name']])[0]
    last_name = le.fit_transform([input_obj['last_name']])[0]
    email = le.fit_transform([input_obj['email']])[0]
    product_id = le.fit_transform([input_obj['product_id']])[0]
    qty = le.fit_transform([input_obj['qty']])[0]
    amount = le.fit_transform([input_obj['amount']])[0]
    subtotal = le.fit_transform([input_obj['subtotal']])[0]
    discount = le.fit_transform([input_obj['discount']])[0]
    invoice_date = le.fit_transform([input_obj['invoice_date']])[0]
    invoice_due_date = le.fit_transform([input_obj['invoice_due_date']])[0]
    client_country = le.fit_transform([input_obj['client_country']])[0]
    business_country = le.fit_transform([input_obj['business_country']])[0]
    business_address = le.fit_transform([input_obj['business_address']])[0]
    business_id = le.fit_transform([input_obj['business_id']])[0]
    business_name = le.fit_transform([input_obj['business_name']])[0]
    business_phone = le.fit_transform([input_obj['business_phone']])[0]

    client_address = le.fit_transform([input_obj['client_address']])[0]
    client_id = le.fit_transform([input_obj['client_id']])[0]
    currency = le.fit_transform([input_obj['currency']])[0]
    iva = le.fit_transform([input_obj['iva']])[0]
    iva2 = le.fit_transform([input_obj['iva2']])[0]
    taxes = le.fit_transform([input_obj['taxes']])[0]
    taxes2 = le.fit_transform([input_obj['taxes2']])[0]
    other = le.fit_transform([input_obj['other']])[0]

    doc_type = le.fit_transform([input_obj['doc_type']])[0]
    invo_type = le.fit_transform([input_obj['invo_type']])[0]
    doc_number = le.fit_transform([input_obj['doc_number']])[0]
    payment_type = le.fit_transform([input_obj['payment_type']])[0]
    payment_method = le.fit_transform([input_obj['payment_method']])[0]

    description = le.fit_transform([input_obj['description']])[0]
    preprocessed_input = []

    input_features = np.array([first_name, last_name, email, client_address, client_id,
                              business_country, invoice_date, invoice_due_date,  product_id, qty,
                              subtotal, discount, taxes, iva, taxes2, iva2,
                              amount, business_name, currency,  business_address, business_id,
                              doc_type, invo_type, description, payment_type, payment_method,
                              other, client_country, doc_number, business_phone
                               ]).reshape(1, -1)

    # Make a prediction using the preprocessed input
    # input_features = np.array(preprocessed_input).reshape(1, -1)
    prediction = clf.predict(input_features)[0]

    # Print the prediction
    print("Prediction: clf", prediction)

    return clf


def train_model():
    # Load the data and split it into training and validation setsdffs
    data = pd.read_csv(
        '/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/invoicesCSV2.csv', sep=';')

    # Load the data and split it into training and validation sets

    # Encode all categorical features including payment_method with LabelEncoder
    le = LabelEncoder()
    data_encoded = data.apply(le.fit_transform)

    # Split the data into training and testing sets
    X = data_encoded.drop('doc_type', axis=1)
    y = data_encoded['doc_type']
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.4, random_state=42)

    # Encode all categorical features including payment_method with OneHotEncoder
    ohe = OneHotEncoder(sparse=False, handle_unknown='ignore')
    X_train_encoded = ohe.fit_transform(X_train)
    X_test_encoded = ohe.transform(X_test)

    # Train a logistic regression model on the training set
    clf = LogisticRegression(fit_intercept=False)
    clf.fit(X_train_encoded, y_train)

    # Make predictions on the testing set
    y_pred = clf.predict(X_test_encoded)
    joblib.dump(clf, 'modelPredict.pkl')
    joblib.dump(le, 'modelPredictle.pkl')
    joblib.dump(ohe, 'modelPredictohe.pkl')
    # Evaluate the performance of the model using accuracy score
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)

    # Use the trained model to make predictions on new data
    input_obj = {
        "invo_type": "Factura Electrónica",
        "doc_number": "123456789",
        "product_id": "123",
        "invoice_date": "2022-05-05",
        "invoice_due_date": "2022-05-05",
        "qty": "2",
        "description": "Product description",
        "business_id": "123Corp",
        "business_name": "23Corp",
        "business_phone": "123456789",
        "business_email": "23Corp@email.com",
        "business_address": "23Corp@email.com",
        "business_country": "23Corp@email.com",
        "client_id": "111240589t",
        "first_name": "Sergio",
        "last_name": "Morales",
        "email": "sergemr@gmail.com",
        "client_address": "111240589t",
        "client_country": "111240589t",
        "currency": "colones",
        "subtotal": "99.99",
        "iva": "0.99",
        "iva2": "0",
        "taxes": "0.15",
        "taxes2": "0",
        "other": "0",
        "discount": "9",
        "amount": "99.99",
        "payment_type": "TIQUETE DE CONTADO",

        "payment_method": "entrante2",
        #   "doc_type": "TIQUETE D"
    }

    loaded_model = joblib.load('modelPredict.pkl')
    input_data = pd.DataFrame(input_obj, index=[0])
    input_data_encoded = input_data.apply(le.fit_transform)
    input_data_ohe = ohe.transform(input_data_encoded)
    predicted_payment_method = loaded_model.predict(input_data_ohe)
    print("Predicted payment  method:",
          le.inverse_transform(predicted_payment_method))

    return clf


def train_model2():
    # Load the data and split it into training and validation setsdffs
    data = pd.read_csv(
        '/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/invoicesCSV2.csv', sep=';')

    # Load the data and split it into training and validation sets

    # Encode all categorical features including payment_method with LabelEncoder
    le = LabelEncoder()
    data_encoded = data.apply(le.fit_transform)

    # Split the data into training and testing sets
    X = data_encoded.drop('doc_type', axis=1)
    y = data_encoded['doc_type']

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.4, random_state=42)

    # Encode all categorical features including payment_method with OneHotEncoder
    ohe = OneHotEncoder(sparse_output=False, handle_unknown='ignore')
    X_train_encoded = ohe.fit_transform(X_train)
    X_test_encoded = ohe.transform(X_test)

    # Train a logistic regression model on the training set
    clf = LogisticRegression()
    clf.fit(X_train_encoded, y_train)

    # Make predictions on the testing set
    y_pred = clf.predict(X_test_encoded)
    joblib.dump(clf, 'modelPredict.pkl')
    joblib.dump(le, 'modelPredictle.pkl')
    joblib.dump(ohe, 'modelPredictohe.pkl')
    # Evaluate the performance of the model using accuracy score
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)

    # Use the trained model to make predictions on new data
    input_obj = {
        "invo_type": "Factura Electrónica",
        "doc_number": "123456789",
        "product_id": "123",
        "invoice_date": "2022-05-05",
        "invoice_due_date": "2022-05-05",
        "qty": "2",
        "description": "Product description",
        "business_id": "123Corp",
        "business_name": "23Corp",
        "business_phone": "123456789",
        "business_email": "23Corp@email.com",
        "business_address": "23Corp@email.com",
        "business_country": "23Corp@email.com",
        "client_id": "111240589t",
        "first_name": "Sergio",
        "last_name": "Morales",
        "email": "sergemr@gmail.com",
        "client_address": "111240589t",
        "client_country": "111240589t",
        "currency": "colones",
        "subtotal": "99.99",
        "iva": "0.99",
        "iva2": "0",
        "taxes": "0.15",
        "taxes2": "0",
        "other": "0",
        "discount": "9",
        "amount": "99.99",
        "payment_type": "TIQUETE DE CONTADO",

        "payment_method": "entrante2",
        #   "doc_type": "TIQUETE D"
    }

    loaded_model = joblib.load('modelPredict.pkl')
    input_data = pd.DataFrame(input_obj, index=[0])
    input_data_encoded = input_data.apply(le.fit_transform)
    input_data_ohe = ohe.transform(input_data_encoded)
    predicted_invoice_type = loaded_model.predict(input_data_ohe)
    print("Predicted predicted_invoice_type:",
          le.inverse_transform(predicted_invoice_type))

    return clf


def testandtrain():
    data = pd.read_csv(
        '/Users/sergio/Documents/School/fileAnalyzer/backend/GenFunctions/invoicesCSV2.csv', sep=';')

    data.head()
    null_counts = data.isnull().sum()
    data = data.dropna()

    # Make test and train objects for model.
    X = data.drop('doc_type', axis=1)
    y = data['doc_type']
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.4, random_state=42)
    le = LabelEncoder()

    # Create a ColumnTransformer to one-hot encode all categorical features
    categorical_features = X.select_dtypes(include=['object']).columns.tolist()
    preprocessor = ColumnTransformer(
        transformers=[('cat', OneHotEncoder(
            handle_unknown='ignore'), categorical_features)],
        remainder='passthrough')

    # Fit and transform the training data
    X_train_encoded = preprocessor.fit_transform(X_train)

    # Transform the testing data
    X_test_encoded = preprocessor.transform(X_test)

    # Train a logistic regression model on the training set
    clf = LogisticRegression()
    clf.fit(X_train_encoded, y_train)

    # Make predictions on the testing set
    y_pred = clf.predict(X_test_encoded)

    # Evaluate the performance of the model using accuracy score
    accuracy = accuracy_score(y_test, y_pred)

    joblib.dump(clf, 'modelPredictLRM.pkl')
    print("Accuracy:", accuracy)
    # Load the data and split it into training and validation setsdffs

    # model Predicitons
    loaded_model = joblib.load('modelPredictLRM.pkl')

    # prediction0
    input_df = pd.DataFrame([input_objDefSaliente])
    X_input = input_df.drop('doc_type', axis=1)
    X_input_encoded = preprocessor.transform(X_input)
    y_pred = loaded_model.predict(X_input_encoded)

    print("Predicted target value:", y_pred)

    # prediction1

    input_df = pd.DataFrame([input_objDef])
    X_input = input_df.drop('doc_type', axis=1)
    X_input_encoded = preprocessor.transform(X_input)
    y_pred = loaded_model.predict(X_input_encoded)

    print("Predicted target value:", y_pred)

    # prediction2
    input_df = pd.DataFrame([input_objNuevoSaliente])
    X_input = input_df.drop('doc_type', axis=1)
    X_input_encoded = preprocessor.transform(X_input)
    y_pred = loaded_model.predict(X_input_encoded)

    print("Predicted target value:", y_pred)

    # return json.dumps(le.inverse_transform(predicted_payment_method).tolist())


# testandtrain()
