import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaShoppingCart,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({onLogout}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Example: Assuming user info is stored in localStorage as JSON
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.name) {
      setUsername(user.name);
    } 
    // else{
    //   setUsername('User');
    // }
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove auth token
    localStorage.removeItem("user");  // remove user info
    navigate("/auth");
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link to="/user/home" className="text-xl font-bold text-gray-800">
        Job Portal
      </Link>

      <div className="flex items-center space-x-4 relative">
        

       
        <div
          className="flex items-center bg-purple-100 rounded-full px-2 py-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-2">
            {getInitials(username)}
          </div>
          <span className="text-sm text-gray-800 font-medium">
            Hi, {username.split(" ")[0]}
          </span>
        </div>

        {menuOpen && (
          <div className="absolute right-0 top-14 bg-white border rounded-lg shadow-lg w-48 z-50">
            <Link
              to="/user/update-profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FaUserCircle className="mr-2" /> Edit Profile
            </Link>
            <Link
              to="/user/dashboard"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FaCog className="mr-2" /> My Account
            </Link>
            <button
  onClick={onLogout}
  className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
>
  <FaSignOutAlt className="mr-2" /> Logout
</button>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
