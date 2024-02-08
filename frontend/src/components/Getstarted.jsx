import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Getstarted({ display, onDisplay }) {
  const [show, setShow] = useState("register");

  const onShow = (e) => {
    setShow(e);
  };

  return (
    <div
      className={
        "bg-white bg-opacity-80 w-full h-screen absolute z-10 top-0 bottom-0 left-0 right-0 flex items-center justify-center " +
        (display == "block" ? "block" : "hidden")
      }
    >
      <div className="bg-white w-[400px] h-[500px] rounded-md shadow-xl flex flex-col justify-center relative ">
        {/* Register form */}
        <div className={show == "register" ? "block" : "hidden"}>
          <Register onShow={onShow} onDisplay={onDisplay} />
        </div>

        {/* login form */}
        <div className={show == "signin" ? "block" : "hidden"}>
          <Login onShow={onShow} onDisplay={onDisplay} />
        </div>

        <button
          className="absolute top-3 right-3 text-4xl"
          onClick={() => {
            onDisplay("hidden");
          }}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
}

export default Getstarted;
