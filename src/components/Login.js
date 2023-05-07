import { useState, useContext } from "react";
import InputControl from "./InputControl";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Login = () => {

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
      if (!localUserData.email || !localUserData.password) {
        setErrorMessage("Please fill every field");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        
        return;
      }
      setLocalUserData(localUserData.isLoggedIn = true);
      setUserData(localUserData);
      setLocalUserData({
        email: "",
        password: ""
      });
  }

  return (
    <>
      <div className="w-full h-full ">
        <div className="w-1/2 flex flex-col items-center mx-auto border rounded border-gray-500  p-5 m-5">
          <InputControl 
            label="Email" 
            placeholder="Enter Email Address" 
            value = {localUserData.email}
            onChange = {(event) =>
              setLocalUserData((prev) => ({...prev, email: event.target.value}))
            } />

          <InputControl 
          label="Password" 
          placeholder="Enter Password" 
          value = {localUserData.password}
          onChange = {(event) => 
            setLocalUserData((prev) => ({...prev, password: event.target.value}))
          }
          />

          { errorMessage != "" && <p className='text-red-500 font-Arvo'>{errorMessage}</p> }

          <div className="w-full m-2">
            <button className="bg-green-400 border rounded p-2 w-full font-Arvo text-lg"
              onClick={handleClick}
            >
              Log In
            </button>
          </div>

          <p className="font-Arvo">Don't have an account, 
          <Link to = "/signup"><span className="text-blue-500 hover:cursor-pointer"
          > Sign Up </span></Link> to continue.</p>
        </div>
      </div>
    </>
  );
};

export default Login;
