import re
from random import shuffle, choice
import os
import boto3
# import textract
import json


def read_image(document_name):

    # Create a Textract client object
    textract = boto3.client('textract')
    print("Reading image!")
    print(document_name)
    # Load the image file into memory
    # with open('/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/factura.png', 'rb') as file:
    #    image_data = file.read()
    my_id = "1-1124-0589"

    my_id = re.sub('[^A-Za-z0-9]+', '', my_id)
    labels = [{"Query": "What is the total", "Text": "total"},
              {"Query": "What is the document type", "Text": "Type"},
              {"Query": "What is the document id", "Text": "docu_id"},
              {"Query": "What is the date", "Text": "issue_date"},
              {"Query": "Whats is the senders cedula juridica or NIF or ced",
               "Text": "issue_cid"},
              {"Query": "Whats is the Customer ID", "Text": "cust_id"},
              {"Query": "Whats is the Customer Name", "Text": "cust_name"},
              {"Query": "Whats is the Customer Email", "Text": "cust_email"},

              {"Query": "What is the address or direccion",
               "Text": "cust_address"},
              {"Query": "How much is the tax percentage", "Text": "iva1"},
              {"Query": "How much is on taxes", "Text": "iva1_value"},
              {"Query": "What is the senders email address",
               "Text": "issue_email"},
              {"Query": "What is the senders address",
               "Text": "issue_address"},
              {"Query": "What is the currency", "Text": "issue_currency"},
              {"Query": "What is the subtotal", "Text": "subtotal"},
              ]
    labelsr = [
        {"Query": "Whats is the cedula juridica or NIF", "Text": "Address"}]
    options = []
    for label in labels:
        options.append(
            {"Text": label["Query"], "Alias": label["Text"]+"Alias"})

    # print(options)
    # document_name = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/factura.png'
    # Open the file and read its contents
    with open(document_name, 'rb') as document:
        # Call Amazon Textract to extract the text from the file
        response = textract.analyze_document(Document={'Bytes': document.read()}, FeatureTypes=[
            'QUERIES'], QueriesConfig={"Queries": options})
    field_name = 'TOTAL'

    # Search for the field you want to extract
    total_value = 0
    total_index = 0
    return_str = "Saliente"

    # print(response['Blocks'])
    jsonString = json.dumps(response['Blocks'], indent=len(response['Blocks']))
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
                            return_str = "Entrante"
                        print(
                            f"El {labels[total_index]['Text']} de esta factura es : {item.get('Text')}")

                # print(f"{response['Blocks'][total_index]}'")
                # total_value = item['Geometry']['BoundingBox']
                # break
                total_index = total_index+1
        except KeyError:
            print(f"{field_name}'s age is unknown.")

    # Print the value of the field
    # json.dumps(return_str)
    # print(jsonString)
    # print("return_str")
    # print(jsonString)
    return jsonString
