

import json
from GenFunctions.analyzePDF import extracttext
from GenFunctions.pdfClass import extract_text, extractPdfText

from flask_cors import CORS
from flask import Flask, request

import os
import sys

sys.path.insert(0, '/GenFunctions')

app = Flask(__name__)
CORS(app)
members = [{"id": 1,        "name": "John Doe"},    {"id": 2,
                                                     "name": "Jane Doe"},    {"id": 3,        "name": "Bob Smith"}]

app.config['UPLOAD_FOLDER'] = './uploads'


@app.route("/extracttext", methods=["POST"])
def extract_text():
    file = request.files['file']
    if not file:
        return {"error": "No file provided."}, 400
    # print(file)

    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)
    text_response = extractPdfText(file_path)
    for key, value in text_response.items():
        if isinstance(value, bytes):
            # Decode the byte string
            text_response[key] = value.decode()

    # Convert the dictionary to JSON
    json_data = json.dumps(text_response)

    # json_response = json.dumps(json_data)
    # print(text_response)
    return {"text": json.dumps(json_data)}


def read_text():
    return {"members": members}


@app.route('/upload', methods=['POST'])
def upload_file():
    print(request)
    file = request.files['file']
    file.save('uploads/' + file.filename)
    return_string = file.filename
    return_string = extracttext('uploads/' + file.filename)
    # jsonString = json.dumps(return_string, indent=len(return_string))

    print('File uploaded successfully')
    print(return_string)
    return return_string


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
    # app.run(debug=True)
