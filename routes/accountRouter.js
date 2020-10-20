const express=require('express');
const mongoose=require('mongoose');

const app=express();

const accountModel=require('../models/account');

app.get('/get',async(req,res)=>{
    try{
        const account= await accountModel.find()
        res.json(account)
     }
     catch(err){
         res.send('Error', +err);
     }
});

app.post('/post',(req,res)=>{
  const accountmodel = new accountModel({
   Id: req.body.Id,
   CustomerId: req.body.CustomerId
    });
accountmodel
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
      const account=await accountModel.findById(req.params.id)
      account.CustomerId=req.body.CustomerId;
      const a2=await account.save()
      res.json(a2);
    }
    catch(err){
      res.send('Error');

    }
});

app.delete('/:id',async(req,res)=>{
    try{
      const account=await accountModel.findByIdAndRemove(req.params.id)
      account.Name=req.body.Name;
      const a1=await account.remove()
      res.json(a1);
    }
    catch(err){
      res.send('Error');
  
    }
  });
  module.exports=app;