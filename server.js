const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userRouter = require('./router/userRouter')
const url = 'mongodb://localhost:27017/my_database'

mongoose.connect(url, {
  useNewUrlParser: true,
}).then(()=>console.log('connect db')).catch(err=>console.log(err))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', userRouter)

app.listen(9000,()=>{
    console.log('jalan');
})