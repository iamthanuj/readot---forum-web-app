import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/readot-logo-white.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Getstarted from "./Getstarted";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const [display, setDisplay] = useState("");
  const [barToggle, setBarToggle] = useState(true);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onDisplay = (e) => {
    setDisplay(e);
  };

  const onBarToggle = () => {
    setBarToggle(!barToggle);
    console.log(barToggle);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
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
            <li className="bg-secendoryColor py-2 px-4 rounded-full font-bold">
              {user ? (<button onClick={onLogout}>Log out</button>) : (<button onClick={() => {onDisplay("block")}}>Get Started</button>)}
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
      <div
        className={
          "absolute bg-mainColor top-[80px] left-0 right-0 p-2  flex flex-col justify-center items-end " +
          (!barToggle ? "block" : "hidden")
        }
      >
        <ul className="flex flex-col justify-center items-center text-white gap-2">
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
              {user ? "Logout" : "Get Started"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
