import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
            unique: true,
            minlength: [10, "Phone number must be at least 10 digits"],
            maxlength: [10, "Phone number cannot exceed 15 digits"]
        },
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            lowercase: true,
            trim: true,
            minlength: [1, "Full name must be at least 3 characters"],
            maxlength: [50, "Full name cannot exceed 50 characters"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"]
        }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model("users", userSchema);

export default userModel;
