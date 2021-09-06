const express = require('express');
const mongoose = require('mongoose'); //third party
const bodyParser = require('body-parser') //core module

// const db = require('./database/db')
// const register_route = require('./routes/register_route');
// const Estate_route = require('./routes/Estate_route');
// const HireRoute = require('./routes/HireRoute');
const app = express();

// app.use(express.json());
// app.use('/pictures', express.static(__dirname + "/pictures/"))
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(register_route);
// app.use(Estate_route);
// app.use(HireRoute);

app.listen(90);
console.log("running app")