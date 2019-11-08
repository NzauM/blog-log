class Users:
    '''
    Class that generates new instances of users
    '''
    users_list = []
    
    def save_users(self):
        '''
        This method will save all users to the user list
        '''
        Users.users_list.append(self)



    def __init__ (self,user_name,first_name,last_name,birth_month,password):
        self.user_name = user_name
        self.first_name = first_name
        self.last_name = last_name
        self.birth_month = birth_month
        self.password = password