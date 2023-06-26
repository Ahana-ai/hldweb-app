import Logs from "../models/log-model.js";

class LogController {
    /**
     * @method newLog
     */
    async newLog(req, res) {
        try {
            const newLog = new Logs(req.body);
            await newLog.save();
        } catch (error) {
            console.log("Error while newLog api calling : ", error.message);
        }
    }
}

export default LogController = new LogController();