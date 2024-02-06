import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/readot-logo-white.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Getstarted from "./Getstarted";

function Header() {
  const [display, setDisplay] = useState("");
  const [barToggle, setBarToggle] = useState(false);

  const user = localStorage.getItem('user')

  const onDisplay = (e) => {
    setDisplay(e);
  };

  const onBarToggle = () => {
    setBarToggle(!barToggle);
    console.log(barToggle);
  };

  return (
    <div className="bg-mainColor flex justify-center items-center fixed left-0 right-0 h-[80px]">
      <div className="container p-5 mx-auto  flex items-center justify-between">
        {/* logo */}
        <div>
          <Link to="/">
            <img src={mainLogo} alt="main logo" className="w-36" />
          </Link>
        </div>

        {/* nav controllers */}
        <div className="desktop hidden md:block">
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
                {user? "Logout" : "Get Started"}
              </button>
            </li>
          </ul>
        </div>
        <div className="mobile block md:hidden">
          {barToggle ? (
            <FaBars
              className="text-white text-3xl cursor-pointer"
              onClick={onBarToggle}
            />
          ) : (
            <FaTimes
              className="text-white text-3xl cursor-pointer"
              onClick={onBarToggle}
            />
          )}
        </div>
      </div>
      <Getstarted display={display} onDisplay={onDisplay} />
    </div>
  );
}

export default Header;
