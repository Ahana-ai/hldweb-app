import axios from "axios";

const url =
  "https://crudcrud.com/api/65c5f9dc151a4ca38d5fe4c52511dc95/ericssondemohlr/";

const mongoUrl = "http://localhost:3000";

/** CRUD OPERATIONS ON REST  */

let request, response, dataReturn;

/**
 * @method getAllData
 */
export const getAllData = async () => {
  try {
    let res = await axios.get(`/api3`);
    console.log(res.data);

    request = ["GET", url, axios.defaults.headers.common, ""];
    response = [res.status + ":" + res.statusText, res.headers, res.data];
    dataReturn = [request, response];
    console.log(dataReturn);

    return dataReturn;
  } catch (error) {
    console.log("Error while calling getAllData--> ", error.message);
  }
};

/**
 * @method editData
 */
export const editData = async (
  //id, data
  ) => {
  try {
    let id = "649FD31EC632B703E8308241";
    let data = {
      "GetResponseSubscriber": {
        "imsi": "734025000145829",
        "msisdn": "584124997370",
        "hlrsn": "4",
        "cardType": "USIM",
        "nam": "BOTH",
        "services": {
          "clip": {
            "prov": "PROV"
          },
          "smsmt": "",
          "optgprss": {
            "optgprs": [
              {
                "prov": "TRUE",
                "cntxId": "3"
              },
              {
                "prov": "TRUE",
                "cntxId": "5"
              },
              {
                "prov": "TRUE",
                "cntxId": "3"
              },
              {
                "prov": "TRUE",
                "cntxId": "5"
              }
            ]
          },
          "odboc": {
            "odboc": "BOIC"
          },
          "odbroam": {
            "odbroam": "BROHPLMNC"
          },
          "category": {
            "category": "COMMON"
          },
          "eps": {
            "prov": "TRUE"
          },
          "smdp": "MSC"
        },
        "rroption": "ALL_PLMNS",
        "skey": "0"
      }
    }
    let res = await axios.put(`/api3/${id}`, data);
    console.log("Data Saved: ", res);
  } catch (error) {
    console.log("Error while calling editData--> ", error.message);
  }
};

/**
 * @method deleteData
 */
export const deleteData = async (
  //id
  ) => {
  try {
    let res = axios.delete(`${url}/${id}`);
    console.log("Data deleted!");
  } catch (error) {
    console.log("Error while calling deleteData--> ", error.message);
  }
};

/**
 * @method postData
 */
export const postData = async (
  //data
) => {
  try {
    let data = {
      "GetResponseSubscriber": {
        "imsi": "734025000145829",
        "msisdn": "584124997370",
        "hlrsn": "1",
        "cardType": "USIM",
        "nam": "BOTH",
        "services": {
          "clip": {
            "prov": "PROV"
          },
          "smsmt": "",
          "optgprss": {
            "optgprs": [
              {
                "prov": "TRUE",
                "cntxId": "3"
              },
              {
                "prov": "TRUE",
                "cntxId": "5"
              },
              {
                "prov": "TRUE",
                "cntxId": "3"
              },
              {
                "prov": "TRUE",
                "cntxId": "5"
              }
            ]
          },
          "odboc": {
            "odboc": "BOIC"
          },
          "odbroam": {
            "odbroam": "BROHPLMNC"
          },
          "category": {
            "category": "COMMON"
          },
          "eps": {
            "prov": "TRUE"
          },
          "smdp": "MSC"
        },
        "rroption": "ALL_PLMNS",
        "skey": "0"
      }
    }
    let res = await axios.post('/api3', data);
    console.log("Data saved: ", res.data);
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
  }
};


/** TRANSACTIONAL LOGS  */

/**
 * @method postRestLogs
 */
export const postRestLogs = async () => {
  try {
    let data = await getAllData();
    await axios.post('/api2/addRestLog', data);
    console.log("SAVED1!!");
  } catch (error) {
    console.log("Error while calling postRestLogs--> ", error.message);
  }
};

/**
 * @methos postSoapLogs
 */
export const postSoapLogs = async (data) => {
  try {
    await axios.post(`/api2/addSoapLog`, data);
    console.log("SAVED2!!");
  } catch (error) {
    console.log("Error while calling postSoapLogs--> ", error.message);
  }
};