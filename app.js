const express=require('express');
const mongoose=require('mongoose');
var bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectDB = require("./models/connection");
connectDB();


const banker=require('./routes/bankRouter');
const customer=require('./routes/customerRouter');
const teller=require('./routes/tellerRouter');
const account=require('./routes/accountRouter');
const loan=require('./routes/loanRouter');
const checking=require('./routes/checkingRouter');
const saving=require('./routes/savingRouter');

app.use('/banker/',banker);
app.use('/customer/',customer);
app.use('/teller/',teller);
app.use('/account/',account);
app.use('/loan/',loan);
app.use('/checking/',checking);
app.use('/saving/',saving);
app.listen(3001);