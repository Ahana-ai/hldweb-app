import axios from "axios";

const url =
  "https://crudcrud.com/api/4b3f880aaa6b489792813bf68e8fb56f/ericssondemohlr/";

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
 * @method getData
 */

/**
 * @method postData
 */
export const postData = async (data) => {
  try {
    let res = await axios.post(url, data);
    console.log("Data saved: ", res);
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
  }
};

/**
 * @method addLog
 */
export const postLogs = async () => {
  try {
    let data = await getAllData();
    await axios.post(`${mongoUrl}/addLog`, data);
  } catch (error) {
    console.log("Error while calling postLogs--> ", error.message);
  }
};
