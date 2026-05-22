import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs"
import config from "../config/config.js";
import jwt from "jsonwebtoken"

const signUp = async (req, res) => {

    try {

        const { phoneNumber, fullName, email, password, confirmPassword } = req.body;

        if (!phoneNumber || !fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password and confirm password do not match"
            })
        }

        const isUserAlreadyExists = await userModel.findOne({
            $or: [
                { email: email },
                { phoneNumber: phoneNumber }
            ]
        })

        if (isUserAlreadyExists) {
            return res.status(409).json({
                message: "User already exists"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            phoneNumber,
            fullName,
            email,
            password: hashPassword,
            confirmPassword
        })

        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                phoneNumber: user, phoneNumber,
                fullName: user.fullName,
                email: user.email
            }
        })

    }
    catch (error) {

        console.log("error", error);

        return res.status(500).json({
            message: "Internal server error"
        })

    }

}

const signIn = async (req, res) => {

    try {
        
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const user = await userModel.findOne({
            $or: [
                {email: email},
                {password: password}
            ]
        })

        if(!user){
            return res.status(404).json({
                message: "User does not exists"
            })
        }

        const decodedPassword = await bcrypt.compare(password, user.password);

        if(!decodedPassword){
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const token = await jwt.sign({
            id: user._id
        }, config.JWT_SECRET)

        res.cookie("userToken", token);

        return res.status(200).json({
            message: "Login successfullys",
            user: {
                id: user._id,
                phoneNumber: user.phoneNumber,
                fullName: user.fullName,
                email: user.email
            }
        })

    } catch (error) {

        console.log("error", error);

        return res.status(500).json({
            message: "Internal server error"
        })

    }
}

export { signUp, signIn };

