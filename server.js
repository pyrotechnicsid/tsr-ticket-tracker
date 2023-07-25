// server.js
const express = require('express');
const mysql = require('mysql');
require('dotenv').config()

const app = express();
const db = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to Database!')

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(express.json());

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