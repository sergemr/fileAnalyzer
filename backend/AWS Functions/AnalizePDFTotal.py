import boto3
import os
import PyPDF2

# Create a Textract client object
textract = boto3.client('textract')

# Load the image file into memory
# with open('/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png', 'rb') as file:
#    image_data = file.read()


document_name = '/Users/sergio/Documents/School/fileAnalyzer/backend/AWS Functions/factura.png'
# Open the file and read its contents
with open(document_name, 'rb') as document:
    # Call Amazon Textract to extract the text from the file
    response = textract.analyze_document(
        Document={'Bytes': document.read()}, FeatureTypes=['QUERIES  QueriesConfiguration={"Queries": [{"Text": "What is the year to date gross pay", "Alias": "PAYSTUB_YTD_GROSS"}]}',],)
field_name = 'TOTAL'

# Search for the field you want to extract
total_value = 0
total_index = 0
# print("Blocks \n", response['Blocks'])
for item in response['Blocks']:
    try:
        # print(item)
        total_index = total_index+1
        if item['Text'] == field_name:
            # Get the value of the field
            print(f"{field_name}' found")
            print(f"{item}'")
            print(f"{response['Blocks'][total_index]}'")
            total_value = item['Geometry']['BoundingBox']
            break
    except KeyError:
        print(f"{field_name}'s age is unknown.")


# Print the value of the field
print(total_value)
