import Notification from "../models/notifications.js";


export const createNotification=async(req,res)=>{
    const {message,userId} =req.body;
    console.log("hello bhaiisab")
    try {
        const notification=await Notification.create({
            userId,
            message,
            status:false,
            timeStamp:new Date().toISOString(),
        });
        res.status(200).json(notification);
    } catch (error) {
        console.log({error});
        res.status(400).json({error});
    }
}

export const getNotifications=async(req,res)=>{
    const {userId} =req.params;
    try {
        const notifications=await Notification.find({userId});
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({error});
    }
}

export const markAsRead=async(req,res)=>{
    const {_id}=req.params;

    try {
        const notification=await Notification.findByIdAndUpdate({_id},{$set:{status:true}},{new:"true"});
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({error});
    }
}