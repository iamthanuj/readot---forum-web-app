import React from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../assets/readot-logo-white.png";

function Header() {
  return (
    <div className="bg-mainColor flex justify-center items-center">
      <div className="container p-5 mx-auto h-[80px] flex items-center justify-between">
        {/* logo */}
        <div>
          <img src={mainLogo} alt="main logo" className="w-36" />
        </div>

        {/* nav controllers */}
        <ul className="text-white flex gap-8 ">
          <li>
            <a href="/">Stories</a>
          </li>
          <li>
            <a href="" onClick={useNavigate('profile')} >Profile</a>
          </li>
          <li>
            <a href=""    className="bg-secendoryColor py-2 px-4 rounded-full font-bold">Get started</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
