import axios from "axios";

const url =
  "https://crudcrud.com/api/9194f0c8b00d49f5af8a3af6d14a18e8/ericssondemohlr/";

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
