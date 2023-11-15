import express from "express";
import {createNotification,getNotifications,markAsRead} from "../controllers/notifications.js"

const router=express.Router();

router.post("/create",createNotification);

router.get("/:userId",getNotifications);

router.patch("/:_id/markAsRead",markAsRead);


export default router;