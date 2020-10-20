const mongoose=require('mongoose');
 const loanSchema= new mongoose.Schema({
     Id: {type: Number, required: true},
     Type: {type: String, required: true},
     AccountId: {type: Number, required: true},
     CustomerId: {type: Number, required: true}
 });
 module.exports = mongoose.model('loans', loanSchema);