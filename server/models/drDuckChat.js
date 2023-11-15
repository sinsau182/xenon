import mongoose from "mongoose";

const drDuckChatSchema=mongoose.Schema({
    userId:String,
    messages:[{
        author:String,
        content:String,
        timeStamp:String,
    }],
})


const DrDuckChat=mongoose.model("DrDuckChat",drDuckChatSchema);

export default DrDuckChat;