const mongoose=require('mongoose');

const account=require('./account');
const loan=require('./loan');
const teller=require('./teller');


const customerSchema=new mongoose.Schema({
   Id: {type: Number, required: true},
   Name: {type: String, required: true},
   Address: {type: String, required: true},
   PhoneNo: {type: Number, required: true},
   AccNo: {type: Number, required: true},
   Account:[{type: mongoose.Schema.Types.ObjectId, ref:'accounts'}],
   Loans:[{type:  mongoose.Schema.Types.ObjectId, ref:'loans'}],
   Teller:[{type:  mongoose.Schema.Types.ObjectId, ref:'tellers'}]

});
module.exports = mongoose.model('customers', customerSchema);