import axios from "axios";

const baseURL = "http://localhost:8000/";

//Login API3
export const validateUser = async (token) => {
    try {
      const res = await axios.get(`${baseURL}api/v1.0/login`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return res.data;
    } catch (e) {
        if (e.response) {
            // Request made and server responded
            console.log(e.response.data);
            console.log(e.response.status);
            console.log(e.response.headers);
          } else if (e.request) {
            // The request was made but no response was received
            console.log(e.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', e.message);
          }
    }
  };

  export const getAllUsers = async () => {
    try {
      const res = await axios.get(`${baseURL}api/v1.0/login/getall`);
      return res.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.data);
            console.log(e.response.status);
            console.log(e.response.headers);
          } else if (e.request) {
            console.log(e.request);
          } else {
            console.log('Error', e.message);
          }
    }
  };

  export const changingUserPassword = async (userId, password) => {
    try {
      const res = axios.put(`${baseURL}api/v1.0/login/${userId}`, {
        data: { password: password },
      });
      return res;
    } catch (e) {
        if (e.response) {
            console.log(e.response.data);
            console.log(e.response.status);
            console.log(e.response.headers);
          } else if (e.request) {
            console.log(e.request);
          } else {
            console.log('Error', e.message);
          }
    }
  };

  // Events API

  export const getAllEvents = async () => {
    try {
      const res = await axios.get(`${baseURL}api/v1.0/event/getAll`);
      return res.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.data);
            console.log(e.response.status);
            console.log(e.response.headers);
          } else if (e.request) {
            console.log(e.request);
          } else {
            console.log('Error', e.message);
          }
    }
  };

  export const saveNewEvent = async (data) => {
    try {
      const res = axios.post(`${baseURL}api/v1.0/event/save`, { ...data });
  
      return (await res).data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.data);
            console.log(e.response.status);
            console.log(e.response.headers);
          } else if (e.request) {
            console.log(e.request);
          } else {
            console.log('Error', e.message);
          }
    }
  };

