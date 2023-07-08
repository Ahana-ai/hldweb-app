import Data from "../models/model.js";

class DataController {
  /**
   * @method postData
   */
  async postData(req, res) {
    try {
      const payload = req.body.GetResponseSubscriber;

      await new Data({
        GetResponseSubscriber: {
          imsi: payload.imsi,
          msisdn: payload.msisdn,
          hlrsn: payload.hlrsn,
          cardType: payload.cardType,
          nam: payload.nam,
          services: {
            clip: {
              prov: payload.services.clip.prov,
            },
            smsmt: payload.services.smsmt,
            optgprss: {
              optgprs: payload.services.optgprss.optgprs,
            },
            odboc: {
              odboc: payload.services.odboc.odboc,
            },
            odbroam: {
              odbroam: payload.services.odbroam.odbroam,
            },
            category: {
              category: payload.services.category.category,
            },
            eps: {
              prov: payload.services.eps.prov,
            },
            smdp: payload.services.smdp,
          },
          rroption: payload.rroption,
          skey: payload.skey,
        },
      }).save();
      console.log("Saved!!");
      return res.status(201).json({ message: "Data Saved" });
    } catch (error) {
      console.log("Error while postData api calling: ", error.message);
      return res.status(500).json(error.message);
    }
  }

  /**
   * @method getAllData
   */
  async getAllData(req, res) {
    try {
      const data = await Data.find();
      return res.status(201).json(data);
    } catch (error) {
      console.log("Error while getAllData api calling: ", error.message);
      return res.status(500).json(error.message);
    }
  }

  /**
   * @method getDataById
   */
  async getDataById(req, res) {
    try {
      const { id } = req.params;
      const data = await Data.findById(id);

      if (!data) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json(data);
    } catch (error) {
      console.log("Error while getDataById api calling: ", error.message);
      return res.status(500).json(error.message);
    }
  }

  /**
   * @method updateDataByImsi
   */
  async updateDataByImsi(req, res) {
    try {
      const { imsi } = req.params;
      const updateData = req.body;

      const updatedData = await Data.findOneAndUpdate(
        { "GetResponseSubscriber.imsi": imsi },
        updateData,
        { new: true }
      );

      if (!updatedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ message: "Data edited!" });
    } catch (error) {
      console.log("Error while updateDataByImsi api calling: ", error.message);
      return res.status(500).json(error.message);
    }
  }

  /**
   * @method deleteDataByImsi
   */
  async deleteDataByImsi(req, res) {
    try {
      const { imsi } = req.params;

      const deletedData = await Data.findOneAndDelete({
        "GetResponseSubscriber.imsi": imsi,
      });

      if (!deletedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      console.log("Error while deleteDataByImsi api calling: ", error.message);
      return res.status(500).json(error.message);
    }
  }

  /**
   * @method deleteDataByImsi
   */
  async deleteData(req, res) {
    try {
      const { imsi } = req.params;

      const updatedData = await Data.findOneAndUpdate(
        { "GetResponseSubscriber.imsi": imsi },
        { isDeleted: true }
      );

      if (!updatedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      console.log("Error while deleteData API calling: ", error.message);
      return res.status(500).json(error.message);
    }
  }
}

export default DataController = new DataController();
