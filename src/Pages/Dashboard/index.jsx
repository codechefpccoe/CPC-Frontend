import React, { useEffect } from "react";
import { db } from "../../Config/Firebase";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { LogoutFromAccount } from "../../Config/Firebase";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Store/login-slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar";
import { message } from "antd";
import { Empty } from "antd";

export const Dashboard = () => {
  const { id } = useParams();
  const [userData, setuserData] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxData = useSelector((state) => state.login);

  useEffect(() => {
    db.collection("user")
      .where("username", "==", id)
      .get()
      .then((data) => {
        if (data.empty) {
          setuserData("empty");
        }
        data.forEach((e) => {
          setuserData(e.data());
        });
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      {userData === "empty" && (
        <div className="flex flex-col h-screen w-screen absolute top-0 justify-center items-center">
          <Empty />
        </div>
      )}
      {userData !== "empty" && userData !== false && (
        <div className="flex h-5/6 w-screen justify-center items-center ">
          <div className="m-10 flex-col border border-black gap-5 flex items-center p-10 rounded-xl">
            <div className="">
              <img
                width={150}
                src="https://www.transparentpng.com/thumb/user/black-male-icon-clipart-png-Uc8rbw.png"
                alt="black Male"
              />
            </div>
            <div className="">
              <div>Name : {userData.name}</div>
              <div>Username : {userData.username}</div>
              <div>Email : {userData.email}</div>
              <div>Coins : {userData.coins}</div>
              {reduxData.email === userData.email && (
                <button
                  onClick={async () =>
                    await LogoutFromAccount().then(() => {
                      dispatch(loginAction.logout());
                      message.success("Logged out successfully");
                      navigate("/");
                    })
                  }
                  className="border-black border-2 px-3"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
