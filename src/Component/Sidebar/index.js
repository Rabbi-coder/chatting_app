import React from "react";
import "./style.css";
import SidebarIcons from "./SidebarIcons";
import { AiOutlineUpload } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Loginusers } from "../../Features/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import Modals from "../Modal";

const Sidebar = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("users");
      dispatch(Loginusers(null));
      navigate("/login");
    });
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_wrapper">
          <div className="profile_details">
            <div className="profile_picture">
              <picture>
                <img src="/Assetes/profilepicture.jpg" alt="profile pic" />
              </picture>
              <div className="profile_overlay">
                <AiOutlineUpload />
              </div>
            </div>
            <h4>Abdullah Al Rabbi</h4>
          </div>
          <div className="profiles_icons">
            <SidebarIcons />
          </div>
          <div className="logout" onClick={handleLogout}>
            <CiLogout />
          </div>
        </div>
        {/* <Modals /> */}
      </div>
    </>
  );
};

export default Sidebar;
