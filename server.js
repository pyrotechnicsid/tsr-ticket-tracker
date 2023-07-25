// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  DB_CONNECTION: mysql,
  host: 'aws.connect.psdb.cloud',
  user: '757j21mpb1gvynjajv34',
  password: 'pscale_pw_aLpJc4v0H39EK9HYI3VVGwoaX2Z1i7n7NbMFrA6Jlqs',
  database: 'test',
  ssl: {}
}
);

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(express.json());

// app.post('/api/add-ticket', (req, res) => {
//   const { ticketNumber, techName } = req.body;
//   const sql = 'INSERT INTO tickets (ticket_number, tech_name) VALUES (?, ?)';
//   
//   });
// });

app.get('/api/currentstatus', (req, res) => {
  const sql = 'SELECT * FROM current_status';
  db.connect(function (err) {
    db.query("SELECT * FROM current_status", function (err, result) {
      if (err) {
        console.log("EROR! Fatal error with connecting to the Database.")
        res.status(500).send("Try Again!");
      }
      else {
        console.log(result);
        res.send(result);
      }
      
    });
  });
})



const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});