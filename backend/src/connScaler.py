from dotenv import load_dotenv
load_dotenv()
import os
import MySQLdb



class Connection:
    def __init__(self):
        
        try:
            self.connection = MySQLdb.connect(
            host= os.getenv("HOST"),
            user=os.getenv("USERNAME"),
            passwd= os.getenv("PASSWORD"),
            db= os.getenv("DATABASE"),
            ssl_mode = "VERIFY_IDENTITY",
            ssl = {
                "ca": "/etc/ssl/cert.pem"
                }
            )
        except:
            print("Error")
    def showCompetences(self):
        cursor = self.connection.cursor() 
        cursor.execute("SELECT * FROM competences")    
        data = cursor.fetchall() 
        cursor.close()
        return data
    def getCompetence(self,id):
        cursor = self.connection.cursor()
        sql = "SELECT * FROM competences WHERE id = %s"
        id = (id,)
        cursor.execute(sql, id)
        data = cursor.fetchall()
        return data
    def insertCompetence(self, name, g_info, date ,req, source,active,cost,attendance,participation,language,url_image):
        cursor = self.connection.cursor()
        cursor.execute("INSERT INTO competences (name, general_info, dates, requirements, sources, active,cost,attendance,participation,language) VALUES ('{0}', '{1}', '{2}', '{3}','{4}','{5}','{6}','{7}','{8}', '{9}','{10}')".format(name, g_info, date ,req, source,active,cost,attendance,participation,language,url_image))
        self.connection.commit()
    
    def deleteCompetence(self,id):
        id = int(id)
        cursor = self.connection.cursor()
        print(type(id))
        cursor.execute("DELETE FROM competences WHERE id = {0}".format(id))
        self.connection.commit()
    def updateCompetence(self, id ,name, g_info, date ,req, source, active,cost,attendance,participation,language, url_image):
        id = int(id)
        cursor = self.connection.cursor()
        sql = "UPDATE competences SET name = %s, general_info = %s, dates = %s, requirements = %s, sources = %s, active = %s, cost = %s, attendance = %s, participation = %s, language = %s, url_image = %s WHERE id = {0}"
        upd = (name, g_info, date ,req,source, active,cost,attendance,participation,language,url_image)
        cursor.execute(sql.format(id), upd)
        self.connection.commit()