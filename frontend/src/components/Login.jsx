import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { PuffLoader } from "react-spinners/";

function Login({ onShow, onDisplay }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;


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
      // navigate("/profile");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);




  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }

    dispatch(login(userData))

  };

  const onChange = (e) => {
    setLoginFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };


  if (isLoading) {
    return <PuffLoader color="#E81F03" size={60} className="mx-auto" />;
  }

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
            value={email}
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <div className="border-b-2 w-3/4 mx-auto mt-5">
          <input
            className="focus:outline-0"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
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
