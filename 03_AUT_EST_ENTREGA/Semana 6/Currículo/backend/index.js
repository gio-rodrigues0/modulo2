const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// server settings

// listen in all network cards (access it at localhost:80)
const hostname = "0.0.0.0";
const port = 80;

// loads sqlite3 database
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "./DataBase/CurriculoDb.db";

// shows frontend
app.use(express.static("../frontend/"));

// use json as middleware
// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(express.json());

//ENDPOINTS API

//adicionar informações
app.post("/informations", (request, response) => {
    let db = new sqlite3.Database(DBPATH);
    let sql =
      "INSERT INTO Informações (Dados) VALUES(?)";
  
    // add query params
    let params = [];
    params.push(request.body.Dados);
  
    // execute query
    db.all(sql, params, (err, rows) => {
      response.statusCode = 200;
      response.json(rows);
    });
    db.close();
  });

//retornar informações
app.get("/informations", (request, response) => {
    let db = new sqlite3.Database(DBPATH);
    let sql = "SELECT * FROM Informações";
  
    db.all(sql, params, (err, rows) => {
      response.statusCode = 200;
      response.json({ user: rows[0] });
    });
    db.close();
  });

// starts the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });