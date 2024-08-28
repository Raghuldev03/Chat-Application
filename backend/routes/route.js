import express from "express"
import { signup } from "../controller/control.js";
import { login } from "../controller/control.js";
import { logout } from "../controller/control.js";


const router = express.Router()

router.post("/signup", signup)
router.post("/login", login);
router.get("/logout", logout);

export default router