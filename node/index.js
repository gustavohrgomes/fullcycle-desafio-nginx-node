const express = require("express");
const mysql = require("mysql");
const app = express();

const config = {
  host: 'mysql-db',
  user: 'root',
  password: '1234',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Gustavo')`;
connection.query(sql);

app.get("/", (req, res) => {
  const sql = `select Name from people;`;

  var queryResult = connection.query(sql, (error, results, fields) => {
    
    const response = `<h1>Full Cycle Rocks!</h1>
                      <ul>
                      ${results.map((element, index, results) => {
                        console.log(element.Name)
                        return `${element.Name}`
                      })}
                      </ul>`

    return res.send(response);
  });
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
