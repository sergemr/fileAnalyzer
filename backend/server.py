

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
    file = request.files['file']
    file.save('uploads/' + file.filename)

    extracttext('uploads/' + file.filename)
    return 'File uploaded successfully'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
    # app.run(debug=True)
