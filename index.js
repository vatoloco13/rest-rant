const express = require('express');
require('dotenv').config()
const app = express();
app.use('/places',require('./controllers/places'))

app.get('/', function(req, res) {
    res.send("hello world!");
});
app.get('*',(req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>')})
   
app.listen(process.env.PORT)