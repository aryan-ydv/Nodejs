const mongoose= require("mongoose")

 
const URI = "mongodb+srv://aryanydv281:Aryan@123@cluster0.dmeot.mongodb.net/test";

 
const connectDB= async()=>{
    await mongoose.connect(URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: true 
    });
    console.log("DB connected !! . . .")

 
}
module.exports = connectDB;


