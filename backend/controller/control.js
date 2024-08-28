import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { errorHandler } from "../Error/error.js"

export const signup = async (req, res,next) => {
    const { username, email, password, confirmpassword, gender } = req.body
    let validUser
    validUser = await User.findOne({ email })
    
    if (validUser) {
        return next(errorHandler(400, "User already exists"));
    }

    if (password !== confirmpassword) {
        return next(errorHandler(400, "Password Do not Match"));
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
        res.cookie("access_token",token,{httpOnly}).status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilepic:newUser.profilepic
        })
    } catch (error) {
       next(error)
    }
}



export const login = async(req, res, next) => {
    try {
        const { email, password } = req.body
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandler(404, "User not found"))
        }

        const validpassword = bcryptjs.compareSync(password, validUser.password)
        if (!validpassword) {
            return next(errorHandler(401, "Invalid Email or Password"))
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_MN);
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({
          _id: validUser._id,
          username:validUser.username,
          email: validUser.email,
          profilepic: validUser.profilepic,
        });
    } catch (error) {
        next(error)
    }

};

export const logout = async (req, res) => {
    try {
        res.clearCookie("access_token")
        res.status(200).json({ message: "User has been Logged out successfully" })
    } catch (error) {
        next(error)
    }
};