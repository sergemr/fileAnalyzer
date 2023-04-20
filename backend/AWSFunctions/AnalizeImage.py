import boto3
import os
import PyPDF2

# Create a Textract client object
textract = boto3.client('textract')

# Load the image file into memory
with open('/Users/sergio/Documents/School/fileAnalyzer/backend/AWSFunctions/factura.png', 'rb') as file:
    image_data = file.read()


# Call the Textract service to detect text in the image
response = textract.detect_document_text(Document={'Bytes': image_data})


# Extract the text from the response
text = ''
for item in response['Blocks']:
    if item['BlockType'] == 'LINE':
        text += item['Text'] + '\n'

print(text)
