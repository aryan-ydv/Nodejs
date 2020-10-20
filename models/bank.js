const mongoose=require('mongoose');

const customer=require('./customer');
const teller=require('./teller');

const bankSchema=new mongoose.Schema({
    BankId: {type: Number, required: true},
    Name: {type: String, required: true},
    Location: {type: String, required: true},
    Customer:[{type:  mongoose.Schema.Types.ObjectId, ref:'customer'}],
    Teller:[{type:  mongoose.Schema.Types.ObjectId, ref:'teller'}]

});

module.exports = mongoose.model('banks', bankSchema);