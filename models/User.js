import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            min: 2,
            max: 50
        },
        gender: {
            type: String,
            min: 5,
            max: 50
        },
        picture: {
            type: String,
        },
        registration: {
            type: String,
            unique: true,
        },
        cpf: {
            type: Number,
        },
        zipCode: {
            type: String,
        },
        password: {
            type: String,
        },
        neighborhood: {
            type: String,
        },
        birthDate: {
            type: String,
        },
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        address: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },

    },
    { timestamps: true }
);

// static method to login user
UserSchema.statics.login = async function (registration, password) {
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