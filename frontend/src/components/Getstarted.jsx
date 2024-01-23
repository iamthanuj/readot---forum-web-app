import React from "react";

function Getstarted({ display }) {
  return (
    <div
      className={
        "bg-white bg-opacity-70 w-full h-screen absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center " +
        (display == "block" ? "block" : "hidden")
      }
    >
      <div className="bg-white w-[400px] h-[500px] rounded-md shadow-xl flex flex-col justify-center ">
        <h3 className="font-poppins font-bold text-3xl text-center ">
          Join Readot.
        </h3>
        <form className="">
          <div className="border-b-2 w-3/4 mx-auto mt-5 ">
            <input className="focus:outline-0" type="text" placeholder="First name " />
          </div>
          <div className="border-b-2 w-3/4 mx-auto mt-5">
            <input className="focus:outline-0" type="text" placeholder="Last name " />
          </div>
          <div className="border-b-2 w-3/4 mx-auto mt-5">
            <input className="focus:outline-0" type="email" placeholder="Email as an Username" />
          </div>
          <div className="border-b-2 w-3/4 mx-auto mt-5">
            <input className="focus:outline-0" type="password" placeholder="Password" />
          </div>
          <div className="border-b-2 w-3/4 mx-auto mt-5">
            <input className="focus:outline-0" type="password" placeholder="Confirm Password" />
          </div>
          <div className="text-center w-3/4 mx-auto mt-7">
            <input className="bg-secendoryColor py-2 px-4 rounded-full font-bold  text-white cursor-pointer"  type="submit" value="Register"/>
          </div>
        </form>
        <p className="text-center mt-7">Already have an account? Sign in</p>
      </div>
    </div>
  );
}

export default Getstarted;
