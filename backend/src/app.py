from flask import Flask, request,jsonify
from flask_cors import CORS
from connection import Connection
app = Flask(__name__)
#Apply configurations
app.config["MYSQL_HOST"]= "localhost"
app.config["MYSQL_USER"]= "root"
app.config["MYSQL_PASSWORD"]= "password"
app.config["MYSQL_DB"] = "oportunitiessedscr"
CORS(app)
con = Connection(app)
@app.route("/competences", methods = ["POST"])
#Crear una competencia
def createCompetence():
    con.insertCompetence(
        request.json["name"],
        request.json["general_info"],
        request.json["date"],
        request.json["requirements"],
        request.json["source"],
        request.json["state"],
        request.json["cost"],
        request.json["attendance"],
        request.json["mode"],
        request.json["language"])
    return "received"
@app.route("/competences", methods = ["GET"])
#Mostrar todas las competencias
def getCompetences():
    data = con.showCompetences()
    competences = []
    print(len(data[0]))
    for d in data:
        competences.append({
            "_id":d[0],
            "name":d[1],
            "general_info": d[2],
            "date":d[3],
            "requirements":d[4],
            "source": d[5],
            "state": d[6],
            "cost":d[7],
            "attendance":d[8],
            "mode":d[9],
            "language":d[10]
        })
        print(competences)
    return jsonify(competences)
#Mostrar una competencia
@app.route("/competence/<id>", methods = ["GET"])
def getCompetence(id):
    data = con.getCompetence(id)
    competence = []
    for d in data:
        competence.append({
            "_id":d[0],
            "name":d[1],
            "general_info": d[2],
            "date":d[3],
            "requirements":d[4],
            "source": d[5],
            "active": d[6],
            "cost":d[7],
            "attendance":d[8],
            "participation":d[9],
            "language":d[10]
        })
        print(competence)
    return jsonify(competence)
@app.route("/competence/<id>", methods = ["PUT"])
#Actualizar una competencia
def updateCompetence(id):
    con.updateCompetence(
        id,
        request.json["name"],
        request.json["general_info"],
        request.json["date"],
        request.json["requirements"],
        request.json["source"],
        request.json["active"],
        request.json["cost"],
        request.json["attendance"],
        request.json["participation"],
        request.json["language"]
        )
    return "received"

@app.route("/competence/<id>", methods = ["DELETE"])
#Eliminar una competencia
def deleteCompetence(id):
    con.deleteCompetence(id)
    print(type(id))
    return "received"

if __name__ == "__main__":
    app.run(debug=True)