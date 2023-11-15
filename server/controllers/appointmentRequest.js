import AppointmentRequest from "../models/appointmentRequest.js";

export const getAppointments=async(req,res)=>{
    const {userId}=req.params;
    try {
        const appointments=await AppointmentRequest.find({doctorId:userId});
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({error});
    }
}

export const create=async(req,res)=>{
    const {patientId,doctorId,symptoms,name,age,sex}=req.body;
     try {
        const request= await AppointmentRequest.create({
            patientId,
            doctorId,
            name,
            age,
            sex,
            symptoms,
            status: "sent",
            response: "pending",
        });

        res.status(201).json(request);

     } catch (error) {
        res.status(400).json({error});
     }
}

export const accept=async(req,res)=>{
    const {_id}=req.params;
    try {
        const upadtedRequest=await AppointmentRequest.findByIdAndUpdate({_id},{$set:{response:"accepted"}},{new:"true"});
        res.status(204).json(upadtedRequest);
    } catch (error) {
        res.status(403).json({error});
    }
}

export const reject=async(req,res)=>{
    const {_id}=req.params;
    try {
        const updatedRequest=await AppointmentRequest.findByIdAndUpdate({_id},{$set:{response:"rejected"}},{new:"true"});
        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(403).json({error});
    }
}

export const markAsRead=async(req,res)=>{
    const {_id}=req.params;
    try {
        const updatedRequest =await AppointmentRequest.findByIdAndUpdate({_id},{$set:{status:"read"}},{new:"true"})
         res.status(200).json(updatedRequest)
    } catch (error) {
        res.status(400).json({error});
    }
}



