import axios from "axios";

const url =
  "https://crudcrud.com/api/b3aa62dbd9a349fabf078b5ae1fffced/ericssondemohlr/";

const mongoUrl = "http://localhost:3000";

/** CRUD OPERATIONS ON REST  */

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
 * @method editData
 */
export const editData = async (id, data) => {
  try {
    let res = await axios.put(`${url}/${id}`, data);
    console.log("Data Saved: ", res);
  } catch (error) {
    console.log("Error while calling editData--> ", error.message);
  }
};

/**
 * @method deleteData
 */
export const deleteData = async (id) => {
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
export const postData = async (data) => {
  try {
    let res = await axios.post(url, data);
    console.log("Data saved: ", res);
  } catch (error) {
    console.log("Error calling postData--> ", error.message);
  }
};


/** TRANSACTIONAL LOGS  */

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
