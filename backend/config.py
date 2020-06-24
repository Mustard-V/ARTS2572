import os


class Default(object):
    DEBUG = True
    SWAGGER_DOC = True
    RESTPLUS_VALIDATE = True
    SQL_DEBUG = True
    AUTO_LOGIN = False
    DB_FILE = os.environ['DB_FILE']
