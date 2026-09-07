import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { addUser, removeUser } from "../Utilites/UserSlice";
import { toast } from "react-toastify";
import { removefeed } from "../Utilites/feedSlice";
import cookie from 'js-cookie'
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = cookie.get()

  // Get user from Redux
  const user = useSelector((store) => store.user);

  const {
    emailId,
    photoUrl,
    firstName,
    lastName
  } = user || {};

  // Get logged-in user
  const getUser = async () => {
    try {
      const userData = await axios.get(
       `${import.meta.env.VITE_API_URL}/profileView`,
        {
          withCredentials: true,
        }
      );

      console.log("User Data:", userData.data);

      dispatch(addUser(userData?.data?.status));

    } catch (e) {
      console.log(
        "Get User Error:",
        e.response?.data || e.message
      );

      navigate("/login");
    }
  };

  // Logout
  const logout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(removeUser());
 dispatch(removefeed());
      toast.success("Logout successfully");

      navigate("/login");

    } catch (e) {
      console.log(
        "Logout Error:",
        e.response?.data || e.message
      );

      toast.error("Something went wrong");
    }
  };

  // On refresh Redux becomes empty,
  // so fetch user from backend
  useEffect(() => {
    if (!emailId && token) {
      getUser();
    }
  }, [emailId]);

  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm">

        {/* Logo */}
        <div className="flex-1">
          <button
            className="btn btn-ghost text-xl"
            onClick={() => navigate("/feed")}
          >
            DevTinder
          </button>
        </div>

        {/* Show only when user is logged in */}
        {emailId && (
          <div className="flex-none flex items-center gap-3">

            {/* User Name */}
            <p>
              Hello, {firstName} {lastName}
            </p>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={`${firstName} ${lastName}`}
                    src={
                      photoUrl ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >

                {/* Profile */}
                <li>
                  <button
                    onClick={() => navigate("/todo")}
                    className="justify-between"
                  >
                    Profile

                    <span className="badge">
                      New
                    </span>
                  </button>
                </li>

                {/* Settings */}
                <li>
                  <Link to="/roughWork">
                    Connections
                  </Link>
                </li>
                <li>
                  <Link to="/requestConnections">
                    Requests
                  </Link>
                </li>

                {/* Logout */}
                <li>
                  <button onClick={logout}>
                    Logout
                  </button>
                </li>

              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;