from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse


# Define Application

app = Flask(__name__)
api = Api(app)


# Query Machine Learning Model from Frontend
class QueryModel(Resource):
    def post(self):
        # Gets img encoded as a string
        data = request.get_json(force=True)
        imgStr = data['image_string']

        result = 1 # Model.predict(imgStr)

        return result


api.add_resource(QueryModel, '/data/query')
    