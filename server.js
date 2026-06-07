const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');
const app = express();

// SQL Injection
app.get('/users', (req, res) => {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id = " + userId;
  db.query(query, (err, result) => res.json(result));
});

// Command Injection
app.post('/run', (req, res) => {
  exec("ls " + req.body.command, (error, stdout) => res.json({ output: stdout }));
});

// XSS
app.get('/profile', (req, res) => {
  res.send('<div>' + req.query.name + '</div>');
});

// Weak Crypto
function hashPassword(pass) {
  return crypto.createHash('md5').update(pass).digest('hex');
}

// Open Redirect
app.get('/redirect', (req, res) => {
  res.redirect(req.query.url);
});

// CORS Wildcard
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(3000);