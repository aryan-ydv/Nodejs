const mongoose=require('mongoose');

const savingSchema=new mongoose.Schema({
    Id: {type: Number, required: true},
    CustomerId: {type: Number, required: true}
});
module.exports = mongoose.model('savings', savingSchema);