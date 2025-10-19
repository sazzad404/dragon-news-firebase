import React from "react";
import logo from "../assets/media/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex mt-10 flex-col items-center gap-3 justify-center">
      <img className="w-[400px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      <p>{format(new Date(), "EEEE , MMMM MM, yyyy")}</p>
    </div>
  );
};

export default Header;
