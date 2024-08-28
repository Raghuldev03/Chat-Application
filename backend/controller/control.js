import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
    const { username, email, password, confirmpassword, gender } = req.body
    let validUser
    validUser = await User.findOne({ email })
    
    if (validUser) {
        return res.status(400).json({ success: false, message: "Email already exists" })
    }

    if (password !== confirmpassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match" })
    }

    const hashpasswaord = bcryptjs.hashSync(password, 10)
    const boyprofile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofile = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    
    const newUser = new User({
        username,
        email,
        password: hashpasswaord,
        gender,
        profilepic: gender == "Male"? boyprofile:girlprofile,
    })

    try {
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_MN)
        await newUser.save()
        res.cookie("access_token",token,{httpOnly:true}).status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilepic:newUser.profilepic
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:"Internal Error",
        })
    }
}



export const login = (req, res) => {};



export const logout = (req, res) => {};