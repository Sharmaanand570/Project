const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();

app.use(bodyParser.json());
app.use(multer().any());


mongoose.connect("mongodb+srv://radon-AnandSharma:Anand570@cluster0.riu1k.mongodb.net/group6Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(3001, function () {
    console.log('Express app running on port ' + 3001)
});

