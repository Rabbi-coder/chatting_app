import React, { useState } from "react";
import "./style.css";
import SidebarIcons from "./SidebarIcons";
import { AiOutlineUpload } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const user =useSelector((users)=>users.login.loggedIn)
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_wrapper">
          <div className="profile_details">
            <div className="profile_picture" onClick={handleOpen}>
              <picture>
                <img src= {user.photoURL} />
              </picture>
              <div className="profile_overlay">
                <AiOutlineUpload />
              </div>
            </div>
            <h4>{user.displayName}</h4>
          </div>
          <div className="profiles_icons">
            <SidebarIcons />
          </div>
          <div className="logout" onClick={handleLogout}>
            <CiLogout />
          </div>
        </div>
        <Modals open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Sidebar;
