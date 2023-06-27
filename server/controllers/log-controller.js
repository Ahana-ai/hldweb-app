import Logs from "../models/log-model.js";

class LogController {
    /**
     * @method newLog
     */
    async newLog(req, res) {
        try {
            // let saveData = await Logs.create(req.body);
            // if(saveData && saveData._id) {
            //     return res.status(200).json({ msg: "Data saved!" });
            // } else {
            //     return res.status(500).json({ msg: "Data Not Saved!" });
            // }
            await new Logs({
                request: [
                    {
                        url: req.body[0][0],
                        method: req.body[0][1],
                        headers: req.body[0][2],
                        body: req.body[0][3]
                    }
                ],
                response: [
                    {
                        statusCode: req.body[1][0],
                        headers: req.body[1][1],
                        body: req.body[1][2]
                    }
                ]
            }).save();
        } catch (error) {
            console.log("Error while newLog api calling : ", error.message);
            return res.status(500).json(error.message);
        }
    }
}

export default LogController = new LogController();