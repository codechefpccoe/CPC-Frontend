import axios from "axios";
import baseURL from "../Config/index";
// Events APIs

export const getAllEvents = async () => {
  try {
    const res = await axios.get(`${baseURL}api/v1.0/event/getAll`);
    return res.data;
  } catch (e) {
    console.log(e.response);
    return e.response.status;
  }
};

export const saveNewEvent = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/v1.0/event/save`, { ...data });
    return (await res).data;
  } catch (e) {
    return e.response.status;
  }
};
