import React, { useState } from "react";

function Login({ onShow }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setLoginFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };



  return (
    <>
      <h3 className="font-poppins font-bold text-3xl text-center ">
        Sign in Readot.
      </h3>
      <form onSubmit={onSubmit}>
        <div className="border-b-2 w-3/4 mx-auto mt-5">
          <input
            className="focus:outline-0"
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 w-3/4 mx-auto mt-5">
          <input
            className="focus:outline-0"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="text-center w-3/4 mx-auto mt-7">
          <input
            className="bg-secendoryColor py-2 px-4 rounded-full font-bold  text-white cursor-pointer"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p className="text-center mt-7">
        No account?{" "}
        <button
          className="text-secendoryColor font-bold"
          onClick={() => {
            onShow("register");
          }}
        >
          Create one
        </button>{" "}
      </p>
    </>
  );
}

export default Login;
