import axios from "axios";

const url =
  "https://crudcrud.com/api/a0cb38ecc5324a7aa4700e4b458c9e3c/ericssondemohlr/";

const mongoUrl = "http://localhost:3000";

let request, response, dataReturn;

/**
 * @method getAllData
 */
export const getAllData = async () => {
  try {
    let res = await axios.get(`${url}`);
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
 * @method addLog
 */
export const postLogs = async () => {
  try {
    let data = await getAllData();
    console.log(data);
    let res = await axios.post(`${mongoUrl}/addLog`, data);
    // return res.data;
  } catch (error) {
    console.log("Error while calling postLogs--> ", error.message);
  }
};
