from app import db
from . import db
from werkzeug.security import generate_password_hash,check_password_hash

class Quote:
    '''
    Quote class that defines quote objects
    '''

    def __init__(self,id,quote,author):
        self.id = id
        self.quote = quote
        self.author = author

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer,primary_key = True)
    username = db.Column(db.String)
    pass_secure =db.Column(db.String)


    @property
    def pasword(self):
        raise AttributeError('Password attribute cannot be read')

    @password.setter
    def password(self,password):
        self.pass_secure = generate_password_hash(password)

    def verify_password(self,password):
        return check_password_hash(self.pass_secure,password)


    def __repr__(self):
        return f'User {self.username}'