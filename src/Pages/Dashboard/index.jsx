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
        data.forEach((e) => {
          setuserData(e.data());
        });
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      {userData && (
        <>
          <div>
            <div>Coins : {userData.coins}</div>
            <div>Username : {userData.username}</div>
            <div>Name : {userData.name}</div>
            <div>Email : {userData.email}</div>
            {reduxData.email === userData.email && (
              <button
                onClick={async () =>
                  await LogoutFromAccount().then(() => {
                    dispatch(
                      loginAction.addLogin({
                        name: -1,
                        email: -1,
                        username: -1,
                        coins: -1,
                      })
                    );
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
        </>
      )}
    </div>
  );
};
