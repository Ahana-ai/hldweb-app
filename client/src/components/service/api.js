import axios from "axios";

const url =
  "https://crudcrud.com/api/723d0c093ec64dc4b042fc59baa10b75/ericssondemohlr/";

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
 * @method addUser
*/
