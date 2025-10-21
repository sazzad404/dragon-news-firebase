import React, { use } from "react";
import { Links, NavLink } from "react-router";
import userIcon from "../assets/media/user.png";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, signout } = use(AuthContext);
  const handleLogOut = () => {
    signout()
      .then(() => {
        alert("You Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="flex gap-12">
        <NavLink to={"/"}> Home</NavLink>
        <NavLink to={"/about"}> About</NavLink>
        <NavLink to={"/carrier"}> Carrier</NavLink>
      </div>
      <div className="flex gap-4">
        <img className="w-12 rounded-full" src={`${user?user.photoURl:userIcon}`} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Log Out
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
