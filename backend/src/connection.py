from flask_mysqldb import MySQL

class Connection:
    def __init__(self, app):
        try:
            self.mysql = MySQL(app)
        except:
            print("Error en la conexión")
    
    def showCompetences(self):
        cursor = self.mysql.connection.cursor() 
        cursor.execute("SELECT * FROM competencias")    
        data = cursor.fetchall() 
        return data
    def getCompetence(self,id):
        cursor = self.mysql.connection.cursor()
        sql = "SELECT * FROM competencias WHERE id = %s"
        id = (id,)
        cursor.execute(sql, id)
        data = cursor.fetchall()
        return data
    def insertCompetence(self, name, g_info, date ,req, source,active,cost,attendance,participation,language):
        cursor = self.mysql.connection.cursor()
        cursor.execute("INSERT INTO competencias (name, general_info, dates, requirements, sources, active,cost,attendance,participation,language) VALUES ('{0}', '{1}', '{2}', '{3}','{4}','{5}','{6}','{7}','{8}', '{9}')".format(name, g_info, date ,req, source,active,cost,attendance,participation,language))
        self.mysql.connection.commit()
    
    def deleteCompetence(self,id):
        id = int(id)
        cursor = self.mysql.connection.cursor()
        print(type(id))
        cursor.execute("DELETE FROM competencias WHERE id = {0}".format(id))
        self.mysql.connection.commit()
    def updateCompetence(self, id ,name, g_info, date ,req, source, active,cost,attendance,participation,language):
        id = int(id)
        cursor = self.mysql.connection.cursor()
        sql = "UPDATE competencias SET name = %s, general_info = %s, dates = %s, requirements = %s, sources = %s, active = %s, cost = %s, attendance = %s, participation = %s, language = %s WHERE id = {0}"
        upd = (name, g_info, date ,req,source, active,cost,attendance,participation,language)
        cursor.execute(sql.format(id), upd)
        self.mysql.connection.commit()
    '''
    def consulta_category(self, category):
        cursor = self.mysql.connection.cursor()
        print(category)
        cursor.execute(f"SELECT * FROM {self.tabla} WHERE category LIKE '%{category}'")
        data = cursor.fetchall()
        return data
    '''    
    