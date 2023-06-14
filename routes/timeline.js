import express from "express";
import * as timelineController from "../controllers/timeline.js";

const router = express.Router();

router.get("/informations", timelineController.getTimelineInformations);

export default router;
