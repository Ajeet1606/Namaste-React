import { useState, useContext } from 'react';
import InputControl from "./InputControl";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';

const SignUp = () => {
  const {setUserData} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const [localUserData, setLocalUserData] = useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false
  });

  const handleClick = () => {
      console.warn(localUserData);
      if (!localUserData.name || !localUserData.email || !localUserData.password) {
        setErrorMessage("Please fill every field");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        
        return;
      }
      setLocalUserData(localUserData.isLoggedIn = true);
      setUserData(localUserData);
      setLocalUserData({
        name: "",
        email: "",
        password: ""
      });
  }

  return (
    <div className="w-full h-full ">
      <div className="w-1/2 flex flex-col items-center mx-auto border rounded border-gray-500  p-5 m-5">
        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          value = {localUserData.name}
          onChange={(event) =>
            setLocalUserData((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <InputControl
          label="Email"
          placeholder="Enter Email Address"
          value = {localUserData.email}
          onChange={(event) =>
            setLocalUserData((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputControl
          label="Password"
          placeholder="Enter Password"
          value = {localUserData.password}
          onChange={(event) =>
            setLocalUserData((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        { errorMessage != "" && <p className='text-red-500 font-Arvo'>{errorMessage}</p> }

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
