import axios from "axios";
import baseURL from "../Config/index";

//Login API3
export const validateUserLoginUsingToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}api/v1.0/login`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (e) {
    // 404 for not found.
    // 502 for network error.
    // 403 do not have sufficient permission to access the data.
    console.log(e);
    return e.response.status;
  }
};

export const LoginUserUsingUsernameAndPassword = async (
  username,
  password
) => {};
export const validateUserGoogle = async (token) => {
  try {
    const res = await axios.get(`${baseURL}api/v1.0/login`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e.response);
    return e.response.status;
  }
};

export const changingUserPassword = async (userId, password) => {
  try {
    const res = axios.put(`${baseURL}api/v1.0/login/${userId}`, {
      data: { password: password },
    });
    return res;
  } catch (e) {
    console.log(e.response);
    return e.response.status;
  }
};
