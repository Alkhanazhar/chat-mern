import { User } from "../Models/UserModel.js";
import { generateToken } from "../config/generateToken.js";
import asyncHandler from "express-async-handler"

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    console.log(name, email, password)

    if (!name || !email || !password || !pic) {
        res.status(404);
        throw new Error('invalid user name or email or password')
    }
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(404);
        throw new Error('user already exist')
    }
    const user = User.create({ name, email, password, pic })
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    }
    else {
        throw new Error('error while creating user')
    }
})

export const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        res.status(404)
        throw new Error("user not found")
    }
    if (user && await user.matchPassword(password)) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })

    }
})