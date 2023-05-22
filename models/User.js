import mongoose from "mongoose";
import bcrypt from "bcrypt"

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
            required: true,
		    unique: true,
        },
        registration: {
            type: String,
            required: true,
		    unique: true,
        }
    },
    {timestamps: true}
);

// static method to login user
UserSchema.statics.login = async function(registration, password) {
    const user = await this.findOne({ registration })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
    }
    throw Error('incorrect credentials')
}

const User = mongoose.model("user", UserSchema);
export default User;