import mongoose from "mongoose";

const phoneBookSchema=mongoose.Schema({
  
 userId:String,
 contacts:[]
})

 var PhoneBook=mongoose.model('PhoneBook',phoneBookSchema);
 export default PhoneBook;