import sqlite3
from flask_restplus import Resource, abort, fields, marshal
from flask import request, jsonify
from model import *
from utils.db import *

sidebar = api.namespace('ingredients', descriptions='ingredients stuff')


@sidebar.route('/list')
class sidebarList(Resource):
    @sidebar.doc(description="get ingredients")
    @sidebar.marshal_with(SidebarListModel, code=200)
    @sidebar.response(400, 'Failure', ErrorMsgModel)
    def get(self):
        db = DB()
        res = []
        ingredients = db.select('ingredient_with_category').execute()
        if not ingredients:
            ingredients = []
        for row in ingredients:
            ingred = row['ingredients'].split(",")
            res.append({'type': row["category"], 'ingredients': ingred})
        return dict(sidebarData=res)

    @sidebar.doc(description="Add ingredients")
    @sidebar.expect(AddIngredientModel)
    @sidebar.response(200, 'Success', api.model('id', {'id': fields.Integer()}))
    @sidebar.response(400, 'Failure', ErrorMsgModel)
    def put(self):
        data = request.get_json()
        data = marshal(data, AddIngredientModel, skip_none=True)

        db = DB()
        category_id = None
        category_id = db.select_one("Category") \
            .where(name=data['category']).execute()
        if not category_id:
            return abort(400, message="category does not exist")

        ingredient = db.select_one("Ingredient") \
            .where(name=data['ingredient']).execute()
        if ingredient:
            return abort(400, message="ingredient has alreay existed")

        try:
            ingredient_id = db.insert('Ingredient') \
                .values(name=data['ingredient'], category_id=category_id['id']) \
                .execute()
        except sqlite3.Error:
            return abort(400, message="invalid data")

        db.commit()
        return jsonify(id=ingredient_id)


@sidebar.route('/<int:id>')
@sidebar.doc(params={'id': 'ingredient id'})
class ingredientDeatil(Resource):

    @sidebar.doc(descriiption=""" Delete a ingredient by given id """)
    @sidebar.response(200, 'Success')
    @sidebar.response(400, 'Failure', ErrorMsgModel)
    def delete(self, id):
        db = DB()
        # TODO: users can only delete the ingredient they added before
        try:
            rows = db.delete('Ingredient') \
                .where(id=id) \
                .execute()
        except sqlite3.Error:
            return abort(400, message="invalid data")

        db.commit()
        return jsonify(message="success")
