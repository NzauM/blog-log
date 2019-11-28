class Config:
    '''
    Configuration parent class
    '''
    pass

class ProdConfig(Config):
    '''
    Configuration child class for production
    '''
    pass

class DevConfig(Config):
    '''
    Configuration child class for development
    '''
    
    DEBUG = True

Config_options = {
    'development' :DevConfig,
    'production' :ProdConfig
}
