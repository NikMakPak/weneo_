from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app=Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/weneoapp'
mongo = PyMongo(app)

CORS(app)
db=mongo.db.users

# @app.route("/users",methods=['POST'])
# def createUser():
#     id = db.insert({
#         'name': request.json['name'],
#         'email':request.json['email'],
#         'phone':request.json['phone'],
#         'project-bundle':''
#     })
#     return jsonify({'id':str(ObjectId(id)), 'msg': "User added"})


@app.route('/upload-user-bundle/<id>', methods=['POST'])
def uploadBundle(id):
    user = db.find_one({'_id': ObjectId(id)})
    user['project-bundle'] = request.json['project-bundle']
    return jsonify({'msg': "Bundle uploaded"})

@app.route('/download-user-bundle/<id>', methods=['GET'])
def downloadBundle(id):
    user = db.find_one({'_id': ObjectId(id)})
    return jsonify({'project-bundle':user['project-bundle']})

@app.route("/nlp")
def text_nlp():
    text = request.json['text_analize']
    if(text!=''):
        from rutermextract import TermExtractor
        term_extractor = TermExtractor()
        dict = {}
        for term in term_extractor(text):
           dict.update({term.normalized:term.count})
        return jsonify({"answer": dict})
    return jsonify({"answer": False})

@app.route('/login')
def login():
    return ''

@app.route('/register',methods=['POST','GET'])
def register():
    return ''

if __name__ == '__main__':
    app.run(debug=True)