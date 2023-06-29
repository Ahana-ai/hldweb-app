import express from "express";
import LogController from "../controllers/log-controller.js";
const router = express.Router();

router.post("/addLog", LogController.newLog);

export default router;
