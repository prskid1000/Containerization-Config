require('dotenv').config({ path: 'secret.env' })
var express = require('express');
var multer = require('multer');

var cors = require('cors');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var upload = multer();

app.use(cors({ origin: true }));
app.use(upload.array('files', 12));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const control = require('./routes/control');

app.post('/getitem', control.getItem);
app.post('/deleteitem', control.deleteItem);
app.post('/setitem', control.setItem);


app.listen(process.env.PORT || 3001,
    () => console.log("Server is running..."));
console.log('CE BackEnd');