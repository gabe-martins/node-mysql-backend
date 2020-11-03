require("dotenv").config();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

con.connect((err) => {
  if (err) {
    console.log("Erro connecting to database...", err);
    return;
  }
  console.log("Connection established!");
});

con.query(
  "SELECT ...",
  (err, rows) => {
    if (err) throw err;

    rows.forEach((row) => {
      console.log(`${row.nomeexibicao} ${row.sobrenome} de ${row.cidade}`);
    });
  }
);

// con.end((err) => {
//   if (err) {
//     console.log("Erro to finish connection...", err);
//     return;
//   }
//   console.log("The connection was finish...");
// });
