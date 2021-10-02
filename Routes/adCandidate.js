const express = require('express');
const mongoose = require('mongoose');
const router= express.Router();
const candidateSchema=require('../Schema/candidateSchema')
//make a model instance

const AddCandidate=new mongoose.model('AddCandidate',candidateSchema)

router.post('/', async(req, res) =>{
  const newCandidate = new AddCandidate(req.body)
  await newCandidate.save((err)=>{
    if(err){
      res.status(500).json({err:'There was server side error'});
    }
    else{
      res.status(200).json({err:'There was successfully inserted '}); 
    }
  })
})

router.post('/all', async(req, res) =>{
await AddCandidate.insertMany(req.body,(err)=>{
  if(err){
    res.status(500).json({err:'There was server side error'});
 }
 else {
  res.status(400).json({message:'There were successfully inserted'});
 }
})
  
})


module.exports = router;
