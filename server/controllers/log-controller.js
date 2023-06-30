import RestLogs from "../models/rest-log-model.js";
import SoapLogs from "../models/soap-log-model.js";

class LogController {
  /**
   * @method newRestLog
   */
  async newRestLog(req, res) {
    try {
      await new RestLogs({
        request: [
          {
            url: req.body[0][0],
            method: req.body[0][1],
            headers: req.body[0][2],
            body: "'" + JSON.stringify(req.body[0][3]) + "'",
          },
        ],
        response: [
          {
            statusCode: req.body[1][0],
            headers: req.body[1][1],
            body: "'" + JSON.stringify(req.body[1][2]) + "'",
          },
        ],
      }).save();
    } catch (error) {
      console.log("Error while newLog api calling : ", error.message);
      return res.status(500).json(error.message);
    }
  }

  /**
   * @method newSoapLog
   */
  async newSoapLog(req, res) {
    try {
      await new SoapLogs({
        service: [
          {
            wsdl: req.body[0][0],
            method: req.body[0][1],
            headers: req.body[0][2],
            body: "'" + JSON.stringify(req.body[0][3]) + "'",
          },
        ],
        response: [
          {
            statusCode: req.body[1][0],
            headers: req.body[1][1],
            body: "'" + JSON.stringify(req.body[1][2]) + "'",
          },
        ],
      }).save();
    } catch (error) {
      console.log("Error while newLog api calling : ", error.message);
      return res.status(500).json(error.message);
    }
  }
}

export default LogController = new LogController();
