from flask import Flask
from flask_bootstrap import Bootstrap
from config import Config_options
from .config import DevConfig

bootstrap = Bootstrap()


def create_app(config_name):
    app = Flask(__name__,instance_relative_config=True)



    app.config.from_object(DevConfig)
    app.config.from_pyfile('config.py')

    bootstrap.init_app(app)


    
    return app

