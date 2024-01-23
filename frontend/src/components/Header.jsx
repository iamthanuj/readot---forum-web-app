import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/readot-logo-white.png";
import Getstarted from "./Getstarted";

function Header() {
  const [display, setDisplay] = useState('')

  const onDisplay = (e)=>{
    setDisplay(e)
  }

  return (
    <div className="bg-mainColor flex justify-center items-center">
      <div className="container p-5 mx-auto h-[80px] flex items-center justify-between">
        {/* logo */}
        <div>
          <Link to="/" ><img src={mainLogo} alt="main logo" className="w-36" /></Link>
        </div>

        {/* nav controllers */}
        <ul className="text-white flex gap-8 items-center ">
          <li>
            <Link to="/stories" >Stories</Link>
          </li>
          <li>
            <Link to="/Profile" >Profile</Link>
          </li>
          <li>
            <button onClick={()=>{onDisplay('block')}}  className="bg-secendoryColor py-2 px-4 rounded-full font-bold" >Get started</button>
          </li>
        </ul>
      </div>
      <Getstarted display={display} onDisplay={onDisplay} />
    </div>
  );
}

export default Header;
