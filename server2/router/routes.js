import express from "express";
const router = express.Router();
import DataController from "../controllers/controller.js";

router.post("/new-data", DataController.postData);
router.get("/all-data", DataController.getAllData);
router.get("/data/:id", DataController.getDataById);
router.put("/update-data/:imsi", DataController.updateDataByImsi);
router.delete("/delete-data/:imsi", DataController.deleteDataByImsi);
router.delete("/delete/:imsi", DataController.deleteData);

export default router;
