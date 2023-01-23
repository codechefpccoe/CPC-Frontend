import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate();
  useEffect(() => {
      const getData = async () => {
        try {
            const resp = await axios.get(
                "http://localhost:8000/api/v1.0/User/GetUser"
                );
                //TODO: save data to redux
        } catch (error) {
            if(error.response.status === 401){
                Navigate("/login")
            }
        }
      
    };
    getData();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
