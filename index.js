const express = require('express');
const mongoose = require('mongoose');

const adCandidate= require('./routes/adCandidate')
const app = express();
app.use(express.json());
const port = 8000


//database connetion with mongoose
mongoose.connect('mongodb://localhost:27017/adCandidate')
.then(()=>console.log('db connected successfully'))
.catch(err => console.error(err))


//databaseconnection with mongoose
mongoose.connect('mongodb://localhost:27017/addjobs')
.then(()=>console.log('db connected successfully'))
.catch(err => console.error(err))

// application route

app.use('/addjob',adCandidate);

app.get('/',(req, res)=>{
  res.send('Welcome')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

