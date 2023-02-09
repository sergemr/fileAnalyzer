from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
members = [    {        "id": 1,        "name": "John Doe"    },    {        "id": 2,        "name": "Jane Doe"    },    {        "id": 3,        "name": "Bob Smith"    }]


@app.route("/members")

def get_members():

    return {"members": members}

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5001,debug=True)
    #app.run(debug=True)