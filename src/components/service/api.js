import axios from "axios";

const url =
  "https://crudcrud.com/api/504582f8a87a43e58393d3568e63aaaf/ericssondemohlr/";

/**
 * @method getAllData
 */
export const getAllData = async () => {
  try {
    let res = await axios.get(`${url}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Error while calling getAllData--> ", error.message);
  }
};

/**
 * @method getData
 */
export const getData = async () => {
  try {
    let res = await axios.get(`${url}/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error while calling getData--> ", error.message);
  }
};
