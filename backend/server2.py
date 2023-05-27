import json
import base64
import io
import ssl
from flask_cors import CORS
from flask import Flask, request
from GenFunctions.ImagesClassClean import read_image_direct
from GenFunctions.model2 import testandtrain

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
members = [
    {"id": 1, "name": "John Doe"},
    {"id": 2, "name": "Jane Doe"},
    {"id": 3, "name": "Bob Smith"}
]


@app.route("/members")
def get_members():
    return {"members": members}


@app.route("/predict", methods=['POST'])
def get_prediction():
    input_obj = request.json
    # response = extracttext(input_obj)
    # print(input_obj)
    return {"predict": "response"}


@app.route("/predicttext", methods=['POST'])
def get_prediction2():
    input_obj = request.json
    # response = extracttext(request.json)
    # print(input_obj)
    return {"predict": "response"}


@app.route("/predictinvoice", methods=['POST'])
def get_prediction_invoice():
    input_obj = request.json
    print("input_obj")
    print(input_obj)
    prediction = testandtrain(input_obj)
    # print(input_obj)
    return {"predict": prediction}


@app.route("/extracttext", methods=['POST'])
def get_text_invoice():
    input_obj = request.json
    print("bufffer coming")
    # Decode the base64 string into bytes
    decoded_bytes = base64.b64decode(input_obj)
    # Create a buffer reader from the decoded bytes
    buffer = io.BytesIO(decoded_bytes)
    print("bufffer coming")
    print("bufffer buffer_contents!")

    response_from_textract = read_image_direct(buffer)

    print("bufffer response_from_textract!")

    body = {
        'message': response_from_textract,
    }

    response = {
        'statusCode': 200,
        'body': json.dumps(body),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response


@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file.save('uploads/' + file.filename)
    return_string = file.filename
    print('File uploaded successfully')
    print(return_string)
    return return_string


@app.route("/version", methods=['GET'])
def get_version():
    version = "1"
    return {"version": version}


if __name__ == "__main__":
    context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
    context.load_cert_chain('/home/ftpuser/ftp_dir/backend/fullchain.pem',
                            '/home/ftpuser/ftp_dir/backend/api.tecnoartesanos.com.key')
    app.run(ssl_context=context, host='0.0.0.0', port=443, debug=False)
