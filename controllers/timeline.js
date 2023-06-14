import Subjects from "../models/Subjects.js";

/* READ */
export const getTimelineInformations = async (req, res) => {
    try {

        const informations = await Subjects.find();
        res.status(200).json(informations);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
