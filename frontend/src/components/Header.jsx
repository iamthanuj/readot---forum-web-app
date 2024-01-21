import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/readot-logo-white.png";

function Header() {
  return (
    <div className="bg-mainColor flex justify-center items-center">
      <div className="container p-5 mx-auto h-[80px] flex items-center justify-between">
        {/* logo */}
        <div>
          <Link to="/" ><img src={mainLogo} alt="main logo" className="w-36" /></Link>
        </div>

        {/* nav controllers */}
        <ul className="text-white flex gap-8 ">
          <li>
            <Link to="/stories" >Stories</Link>
          </li>
          <li>
            <Link to="/Profile" >Profile</Link>
          </li>
          <li>
            <Link  to="/login" className="bg-secendoryColor py-2 px-4 rounded-full font-bold" >Get started</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
