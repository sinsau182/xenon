import express from "express";
import {markAsRead,create,accept,reject, getAppointments} from "../controllers/appointmentRequest.js"
const router=express.Router();

router.post("/create",create);

router.get("/:userId",getAppointments);

router.patch("/:_id/accept",accept);
router.patch("/:_id/reject",reject);
router.patch("/:_id/markAsRead",markAsRead);



export default router;