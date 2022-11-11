from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app=Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/weneoapp'
mongo = PyMongo(app)

CORS(app)

db=mongo.db.users

@app.route("/")
def index():
 return '<h1>Hello from server</h1>'

if __name__ == '__main__':
    app.run(debug=True)