import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/readot-logo-white.png";
import Getstarted from "./Getstarted";

function Header() {
  const [display, setDisplay] = useState("");

  const onDisplay = (e) => {
    setDisplay(e);
  };

  return (
    <div className="bg-mainColor flex justify-center items-center fixed left-0 right-0 h-[80px]">
      <div className="desktop hidden md:block">
        <div className="container p-5 mx-auto  flex items-center justify-between">
          {/* logo */}
          <div>
            <Link to="/">
              <img src={mainLogo} alt="main logo" className="w-36" />
            </Link>
          </div>

          {/* nav controllers */}
          <ul className="text-white flex gap-8 items-center ">
            <li>
              <Link to="/">Stories</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  onDisplay("block");
                }}
                className="bg-secendoryColor py-2 px-4 rounded-full font-bold"
              >
                Get started
              </button>
            </li>
          </ul>
        </div>
        <Getstarted display={display} onDisplay={onDisplay} />
      </div>

      <div className="block md:hidden">
        
      </div>
    </div>
  );
}

export default Header;
