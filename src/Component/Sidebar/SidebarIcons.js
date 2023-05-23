import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SidebarIcons = () => {
  return (
    <>
      <div className="sidebar_icons">
        <NavLink className="profile_icons" to="/">
          <AiOutlineHome />
        </NavLink>
        <NavLink className="profile_icons" to="/Chat">
          <AiOutlineMessage />
        </NavLink>
        <div className="profile_icons">
          <IoIosNotificationsOutline />
        </div>
        <div className="profile_icons">
          <BsGear />
        </div>
      </div>
    </>
  );
};

export default SidebarIcons;
