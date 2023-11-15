
import { Configuration, OpenAIApi } from "openai";
import DrDuckChat from "../models/drDuckChat.js";


const configuration = new Configuration({
    // organization:process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_KEY,
})

const openai = new OpenAIApi(configuration);


export const ask = async (req, res) => {
    const { content} = req.body;
    const { userId } = req.params;
    // console.log({content})

    try {
        const openaiResponse={data:{choices:[{message:{content:"hello I am chatbot powered by openAI. Medverse have used my quota , wait for sometime I will be ready to help you"}}]}};
        const chatExists = await DrDuckChat.findOne({ userId });
        if (!chatExists) {
            await DrDuckChat.create({
                userId,
                messages: [],
                timeStamp: new Date().toISOString()
            })
        }
        await DrDuckChat.findOneAndUpdate({ userId }, { $push: { messages: { author: "user", content, timeStamp: new Date().toISOString() } } }, { new: "true" })
        await DrDuckChat.findOneAndUpdate({ userId }, { $push: { messages: { author: "bot", content: openaiResponse.data.choices[0].message.content, timeStamp: new Date().toISOString() } } }, { new: "true" })
        res.status(200).json({timeStamp:new Date().toISOString(), author:"bot",content: openaiResponse.data.choices[0].message.content });
    } catch (error) {
        console.log({ error })
        res.status(400).json({ error });
    }
}

export const fetchDrDuckChat=async (req,res)=>{
    const {userId}=req.params;
    try {
        const chat=await DrDuckChat.findOne({userId});
        if(!chat) return res.status(200).json([]);
        const {messages}=await DrDuckChat.findOne({userId},{messages:1});
        res.status(200).json(messages);
    } catch (error) {
        console.log({error});
        res.status(400).json({error});
    }
}