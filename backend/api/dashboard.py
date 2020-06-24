import sqlite3
import base64
from flask_restplus import Resource, abort, fields, marshal
from flask import request, jsonify
from werkzeug.datastructures import FileStorage
from model import *
from utils.db import *
from utils.crypto import hash_password

recipe = api.namespace('dashboard', descriptions='dashboard stuff')


@recipe.route('/signup')
class RecipeList(Resource):
    @recipe.doc(description="create account")
    @recipe.response(200, 'Success')
    @recipe.response(400, 'Failure', ErrorMsgModel)
    @recipe.expect(SignUpModel)
    def post(self):
        data = request.get_json()
        name = data['name']
        password = data['password']
        email = data['email']
        db = DB()

        password_encrypted = hash_password(password)

        user = db.select_one("Users") \
            .where(name=name).execute()
        if user:
            return abort(400, message="username already exist")

        user = db.select_one("Users") \
            .where(email=email).execute()
        if user:
            return abort(400, message="email already exist")

        try:
            db.insert('Users') \
                .values(name=name, password=password_encrypted, email=email) \
                .execute()
            db.commit()
        except sqlite3.Error:
            return abort(400, message="Invalid data")

        return {}, 200

