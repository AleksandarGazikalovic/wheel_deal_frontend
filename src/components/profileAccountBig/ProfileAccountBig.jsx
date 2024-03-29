import React, { useEffect } from "react";
import { RiAccountCircleFill, RiArrowDownSLine } from "react-icons/ri";
import "./profileAccountBig.css";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import CustomButton from "../customButton/CustomButton";
import { Avatar } from "@mui/material";
import { logoutUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const ProfileAccountBig = ({ color }) => {
  const user = useSelector((state) => state.user.userInfo);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [user]);

  const handleLogout = () => {
    // Check if any of the fields is empty
    dispatch(logout());
    dispatch(logoutUser({})).then((result) => {
      if (logoutUser.fulfilled.match(result)) {
        // dispatch(logout());
        navigate("/"); // Successful logout
      } else {
        console.log(result.payload.message);
      }
    });
    //window.location.reload();
  };
  return (
    <div
      className="wd--navbar-sign--account"
      style={{ backgroundColor: color }}
    >
      <Link to="/profile">
        <div className="wd--navbar-sign--account-avatar">
          <Avatar
            sx={{
              width: "inherit",
              height: "inherit",
              backgroundColor: user.profileImage ? "" : "#003049",
            }}
            src={user.profileImage}
            alt={user.firstname + " " + user.lastname}
          />
        </div>
      </Link>
      <div className="wd--header--sign-dropdown">
        {toggleDropdown ? (
          <RiCloseLine
            color="#003049"
            size="45"
            onClick={() => setToggleDropdown(false)}
          />
        ) : (
          <RiArrowDownSLine
            color="#003049"
            size="45"
            onClick={() => setToggleDropdown(true)}
          />
        )}
        {toggleDropdown && (
          <div className="wd--header--sign-dropdown-container">
            <div className="wd--header--sign-dropdown-container-links">
              <p>
                <Link to="/profile">Profile</Link>
              </p>
              <p>
                <Link to="add-post">Post your car</Link>
              </p>
              <p>
                <Link to="settings">Settings</Link>
              </p>
            </div>
            <CustomButton text="Sign out" action={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAccountBig;
