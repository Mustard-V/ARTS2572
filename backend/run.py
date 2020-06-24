#!/usr/bin/env python3
import os

os.environ['DB_FILE'] = 'database.db'
from app import app
from api.ingredients import *
from api.recipe import *
from api.dashboard import *



app.run(debug=True)
