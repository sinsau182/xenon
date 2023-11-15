import mongoose from "mongoose";

const appointmentRequestSchema = mongoose.Schema({
    patientId: String,
    doctorId:String,
    name: String,
    age: String,
    sex: String,
    symptoms: String,
    status: String,
    response: String,

});

const AppointmentRequest = mongoose.model("AppointmentRequest", appointmentRequestSchema);

export default AppointmentRequest;