from flask import Flask
from flask_restplus import Api
from flask_cors import CORS


app = Flask(__name__)
app.config.from_object('config.Default')
app.config.from_object('secrets.Secret')

apiConfig = {
    'doc': '/' if app.config['SWAGGER_DOC'] else False,
    'validate': app.config['RESTPLUS_VALIDATE']
}

if app.debug:
    CORS(app, supports_credentials=True,
         origins=['http://localhost:3000', 'http://localhost:5000'])

api = Api(app, **apiConfig)
