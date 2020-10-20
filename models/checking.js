const mongoose=require('mongoose');

const checkingSchema=new mongoose.Schema({
    Id: {type: Number, required: true},
    CustomerId: {type: Number, required: true}
});
module.exports = mongoose.model('checkings', checkingSchema);