import mongoose from "mongoose";

const notificationSchema=mongoose.Schema({
  userId:String,
  message:String,
  status:Boolean,
  timeStamp:String,
 }  
);

const Notification=mongoose.model('Notification',notificationSchema);

export default Notification;