const express=require('express');
const mongoose=require('mongoose');
const customerModel=require("../models/customer");
 const app=express();



 app.get('/get',async(req,res)=>{
  try{
    const customer= await customerModel.find()
    res.json(customer)
 }
 catch(err){
     res.send('Error', +err);
 }
 });
 
 app.post('/post',(req,res)=>{ 
    const customermodel=new customerModel({
      Id: req.body.Id,
      Name: req.body.Name,
      Address: req.body.Address,
      PhoneNo: req.body.PhoneNo,
      AccNo: req.body.AccNo
   });
   customermodel
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
    const customer=await customerModel.findById(req.params.id)
    customer.Name=req.body.Name;
    const a1=await customer.save()
    res.json(a1);
  }
  catch(err){
    res.send('Error');

  }
});

app.delete('/:id',async(req,res)=>{
  try{
    const customer=await customerModel.findByIdAndRemove(req.params.id)
    customer.Name=req.body.Name;
    const a1=await customer.remove()
    res.json(a1);
  }
  catch(err){
    res.send('Error');

  }
});
 module.exports=app;