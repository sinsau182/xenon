import mongoose from "mongoose";

const doctorSchema=mongoose.Schema({
  
    name:String,
    email:String,
    password:String,
    phoneNumber:String,
    registrationNumber:String,
    speciality:String,
    degrees:[String],
    bio:String,
    isVerified:Boolean,
    createdAt:String,
    updatedAt:String,

})

 var User=mongoose.model('User',userSchema);
 export default User;