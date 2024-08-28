import express from "express"
import { isAuthenticate } from "../middleware/verifyToken.js";
import { getUsersidebar } from "../controller/usercontrol.js"

const router = express.Router()


router.get("/", isAuthenticate, getUsersidebar);

export default router