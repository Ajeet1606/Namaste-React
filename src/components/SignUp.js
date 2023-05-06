import { useState } from 'react';
import InputControl from "./InputControl";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
      console.warn(userData);
  }

  return (
    <div className="w-full h-full ">
      <div className="w-1/2 flex flex-col items-center mx-auto border rounded border-gray-500  p-5 m-5">
        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <InputControl
          label="Email"
          placeholder="Enter Email Address"
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className="w-full m-2">
          <button className="bg-green-400 border rounded p-2 w-full font-Arvo text-lg"
          onClick={handleClick} >
            Sign Up
          </button>
        </div>

        <p className="font-Arvo">
          Already have an account,
          <Link to="/login">
            <span className="text-blue-500 hover:cursor-pointer"> Log In </span>
          </Link>{" "}
          to continue.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
