const express=require('express');
const mongoose=require('mongoose');

 const app=express();

const tellerModel=require("../models/teller");

 app.get('/get',async(req,res)=>{
    try{
        const teller= await tellerModel.find()
        res.json(teller)
     }
     catch(err){
         res.send('Error', +err);
     }
 });
 
 app.post('/post',(req,res)=>{ 
    const tellermodel=new tellerModel({
        Id: req.body.Id,
        Name:req.body.Name
   });
   tellermodel
   .save()
   .then(result => {
    res.send("successfully uploaded");
  })
  .catch(err => {
  res.status(500).json({ error: err });
  });

 });

 app.put('/:id',async(req,res)=>{
    try{
      const teller=await tellerModel.findById(req.params.id)
      teller.Name=req.body.Name;
      const a1=await teller.save()
      res.json(a1);
    }
    catch(err){
      res.send('Error');
  
    }
  });

  app.delete('/:id',async(req,res)=>{
    try{
      const teller=await tellerModel.findByIdAndRemove(req.params.id)
      teller.Name=req.body.Name;
      const a1=await teller.remove()
      res.json(a1);
    }
    catch(err){
      res.send('Error');
  
    }
  });
 
 module.exports=app;