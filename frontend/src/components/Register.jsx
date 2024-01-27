import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { PuffLoader } from "react-spinners/";

function Register({ onShow, onDisplay }) {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = registerData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      onDisplay("hidden");
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(register(userData));

      setRegisterData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
      });

    }
  };

  if (isLoading) {
    return <PuffLoader color="#E81F03" size={60} className="mx-auto" />;
  }

  return (
    <>
      <h3 className="font-poppins font-bold text-3xl text-center ">
        Join Readot.
      </h3>
      <form onSubmit={onSubmit}>
        <div className="border-b-2 w-3/4 mx-auto mt-5 ">
          <input
            className="focus:outline-0"
            type="text"
            placeholder="First name"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 w-3/4 mx-auto mt-5">
          <input
            className="focus:outline-0"
            type="text"
            placeholder="Last name"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 w-3/4 mx-auto mt-5">
          <input
            className="focus:outline-0"
            type="email"
            placeholder="Email as an Username"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 w-3/4 mx-auto mt-5">
          <input
            className="focus:outline-0"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 w-3/4 mx-auto mt-5">
          <input
            className="focus:outline-0"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <div className="text-center w-3/4 mx-auto mt-7">
          <input
            className="bg-secendoryColor py-2 px-4 rounded-full font-bold  text-white cursor-pointer"
            type="submit"
            value="Register"
          />
        </div>
      </form>
      <p className="text-center mt-7">
        Already have an account?{" "}
        <button
          className="text-secendoryColor font-bold"
          onClick={() => {
            onShow("signin");
          }}
        >
          Sign in
        </button>
      </p>
    </>
  );
}

export default Register;
