const mongoose=require('mongoose');

 const customer=require('./customer');

const tellerSchema=new mongoose.Schema({
    Id: {type: Number, required: true},
    Customer:[{type: mongoose.Schema.Types.ObjectId, ref:'customer'}],
    Name: {type: String, required: true}
});
module.exports = mongoose.model('tellers', tellerSchema);