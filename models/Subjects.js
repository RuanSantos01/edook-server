import mongoose from "mongoose";

const SubjectsSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            required: true
        },
        instructor: {
            type: String,
            required: true
        },
        fault: {
            type: Number,
            required: true
        },
        XP: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const Subjects = mongoose.model("subjects", SubjectsSchema);
export default Subjects;