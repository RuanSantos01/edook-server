import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        socialName: {
            type: String,
            required: true,
            min: 5,
            max: 50
        },
        taxpayerRegister: {
            type: Number,
        },
        zipCode: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        houseNumber: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const User = mongoose.model("user", UserSchema);
export default User;