from flask import Flask
from flask_cors import CORS
import pymysql
import logging


app=Flask(__name__)

@app.route('/',methods=["GET"])
def home():
    cursor =db.cursor()
    cmd="SHOW TABLES;"
    cursor.execute(cmd)
    tables=cursor.fetchall()
    print(tables)
    return "Hellooo manasi!"

import portalocker

lock = portalocker.RedisLock('some_lock_channel_name')

with lock:
    print('do something here')

if __name__ !="_main_":
    gunicorn_logger = logging.getLogger("gunicorn.error")
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)

if __name__ == '__main__':
    app.run(debug=True)