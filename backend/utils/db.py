# this is from my COMP4920 project
import sqlite3
from app import app


def init_connection(enforce_fk):
    conn = sqlite3.connect(app.config['DB_FILE'])
    if enforce_fk:
        conn.cursor().execute("PRAGMA foreign_keys = ON")
    conn.row_factory = sqlite3.Row
    return conn


def row2dict(row):
    result = dict(zip(row.keys(), row))
    keys = row.keys()
    i = 0
    for key in keys:
        result[i] = result[key]
        i += 1
    return result


class SQLStub():
    def __init__(self, conn, type, q, return_one=False):
        self.conn = conn
        self.type = type
        self.sql = q
        self.params = tuple()
        self._keys = []
        self.return_one = return_one

    def values(self, **kwargs):
        keys = kwargs.keys()
        values = [kwargs[k] for k in keys]
        qs = ['?' for key in keys]
        self.sql += "({}) VALUES ({})".format(', '.join(keys), ', '.join(qs))
        self.params += tuple(values)
        return self

    def set(self, **kwargs):
        keys = kwargs.keys()
        updates = ["{} = ?".format(key) for key in keys]
        self.sql += " SET " + ', '.join(updates)
        self.params += tuple([kwargs[k] for k in keys])
        return self

    def keys(self, *args):
        self._keys += [*args]
        return self

    def where(self, *args, **kwargs):
        conditions = [*args]
        keys = kwargs.keys()
        conditions += ["{} = ?".format(key) for key in keys]
        self.params += tuple([kwargs[k] for k in keys])
        self.sql += " WHERE " + " AND ".join(conditions)
        return self

    def add_param(self, param):
        self.params += (param,)
        return self

    def order_by(self, key):
        self.sql += f" ORDER BY {key}"
        return self

    def execute(self):
        cursor = self.conn.cursor()

        if not self._keys:
            self._keys = "*"
        self.sql = self.sql.format(keys=','.join(self._keys))

        if app.config['SQL_DEBUG']:
            print("[SQL_DEBUG] " + str(self.sql))
            print("[SQL_DEBUG] " + str(self.params))

        cursor.execute(self.sql, self.params)
        if self.type == 'INSERT':
            return cursor.lastrowid
        elif self.type == 'UPDATE' or self.type == 'DELETE':
            return cursor.rowcount
        elif self.type == 'SELECT':
            rows = cursor.fetchall()
            if (len(rows) == 0):
                return None
            elif (self.return_one):
                row = rows[0]
                if len(row) == 1:
                    return row[0]
                return row2dict(row)
            else:
                return [row2dict(row) for row in rows]
        else:
            raise Exception("Unkown type of query {}".format(self.type))

    def execute_and_commit(self, close=True):
        r = self.execute()
        self.commit(close)
        return r

    def commit(self, close=True):
        self.conn.commit()
        if close:
            self.conn.close()


class DB():
    def __init__(self, enforce_fk=True):
        self.conn = init_connection(enforce_fk)

    def raw(self, sql, params=[]):
        cursor = self.conn.cursor()
        cursor.execute(sql, tuple(params))
        result = cursor.fetchall()
        return result

    def insert(self, table):
        return SQLStub(self.conn, 'INSERT', 'INSERT INTO {}'.format(table))

    def select(self, table):
        return SQLStub(self.conn, 'SELECT', 'SELECT {} FROM {}'.format("{keys}", table))

    def select_one(self, table):
        return SQLStub(self.conn, 'SELECT', 'SELECT {} FROM {}'.format("{keys}", table), True)

    def update(self, table):
        return SQLStub(self.conn, 'UPDATE', 'UPDATE {}'.format(table))

    def delete(self, table):
        return SQLStub(self.conn, 'DELETE', 'DELETE FROM {}'.format(table))

    def commit(self):
        self.conn.commit()
        self.conn.close()
