import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs"

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
            message: "internal server error"
        })

    }

}

// const signIn = (req, res) => {
//     console.log("SignIn controller");
// }

export { signUp };

