import express from "express";
const router=express.Router();
import { ask,fetchDrDuckChat } from "../controllers/drduck.js";

router.post("/ask/:userId",ask);
router.get("/chat/:userId",fetchDrDuckChat);

export default router;