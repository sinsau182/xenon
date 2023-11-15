import express from "express"
const router=express.Router();
import {signin,editProfile,signup,getUsers,getUsersBySearch,getUser,googleAuth, fetchPhoneBook, saveContactMessage} from "../controllers/users.js";


router.post("/signin",signin);
router.post("/signup",signup);

router.get("/",getUsers)
router.post("/googleAuth",googleAuth)
router.get("/search",getUsersBySearch)
router.get("/:id",getUser)
router.patch("/dashboard/editProfile/:_id",editProfile)
router.get("/fetchPhoneBook/:_id",fetchPhoneBook);
router.post('/saveContactMessage',saveContactMessage);


export default router;