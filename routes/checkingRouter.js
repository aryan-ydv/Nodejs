const express=require('express');
const mongoose=require('mongoose');

const app=express();

const checkingModel=require('../models/checking');

app.get('/get',async(req,res)=>{
  try{
    const checking= await checkingModel.find()
    res.json(checking)
 }
 catch(err){
     res.send('Error', +err);
 }
});

app.post('/post',(req,res)=>{
  const checkingmodel = new checkingModel({
   Id: req.body.Id,
   CustomerId: req.body.CustomerId
    });
checkingmodel
.save()
.then(result => {
  res.send("successfully uploaded");
})
.catch(err => {
res.status(500).json({ error: err });
});
  //console.log(req.body);
   //res.json(req.body);
});

app.put('/:id',async(req,res)=>{
  try{
    const checking=await checkingModel.findById(req.params.id)
    checking.Id=req.body.Id;
    const a1=await checking.save()
    res.json(a1);
  }
  catch(err){
    res.send('Error');

  }
});

app.delete('/:id',async(req,res)=>{
  try{
    const checking=await checkingModel.findByIdAndRemove(req.params.id)
    checking.Name=req.body.Name;
    const a1=await checking.remove()
    res.json(a1);
  }
  catch(err){
    res.send('Error');

  }
});
  module.exports=app;