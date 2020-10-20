const mongoose=require('mongoose');

 const accountSchema=new mongoose.Schema({
     Id: {type: Number, required: true},
     CustomerId: {type: Number, required: true}
 });
 module.exports = mongoose.model('accounts', accountSchema);