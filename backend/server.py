

import json
from GenFunctions.analyzePDF import extracttext
from flask_cors import CORS
from flask import Flask, request

import os
import sys

sys.path.insert(0, '/GenFunctions')

app = Flask(__name__)
CORS(app)
members = [{"id": 1,        "name": "John Doe"},    {"id": 2,
                                                     "name": "Jane Doe"},    {"id": 3,        "name": "Bob Smith"}]


@app.route("/members")
def get_members():
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
