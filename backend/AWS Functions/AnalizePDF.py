import boto3
import os
import PyPDF2

# Create a Textract client object
textract = boto3.client('textract')

# Load the image file into memory
# with open('/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png', 'rb') as file:
#    image_data = file.read()

with open('/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.pdf', 'rb') as f:
    pdf_reader = PyPDF2.PdfReader(f)
    pdf_contents = []
    for i in range(len(pdf_reader.pages)):
        pdf_contents.append(pdf_reader.pages[(i)].extract_text())


# Call the Textract service to detect text in the image
# response = textract.detect_document_text(Document={'Bytes': image_data})

# response = textract.detect_document_text(
#    Document={'Bytes': pdf_contents.encode('utf-8')})
# Extract the text from the response
print(pdf_contents)
print(pdf_contents[0].split("\n"))
text = ''
for item in pdf_contents[0].split("\n"):
    text += item+'\n'

print(text)
