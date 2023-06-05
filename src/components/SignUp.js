import { useState } from "react";
import InputControl from "./InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [signUpInProcess, setSignUpInProcess] = useState(false);

  const [localUserData, setLocalUserData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const navigate = useNavigate();

  const handleClick = () => {
    if (
      !localUserData.name ||
      !localUserData.email ||
      !localUserData.password
    ) {
      setErrorMessage("Please fill every field");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);

      return;
    }

    //create user in firebase
    setSignUpInProcess(true);

    createUserWithEmailAndPassword(
      auth,
      localUserData.email,
      localUserData.password
    )
      .then (async(res) => {
        console.log(res.user.displayName);
        console.log("Updating profile name");
        await updateProfile(res.user, {
          displayName: localUserData.name,
        });
        console.log("profile updated");
        console.log(res.user.displayName);
        setSignUpInProcess(false);
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.code + " " + err.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
        setSignUpInProcess(false);
      });

    setLocalUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-1/2 flex flex-col items-center mx-auto border rounded border-gray-500  p-5 m-5">
   
        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          type="text"
          value={localUserData.name}
          onChange={(event) =>
            setLocalUserData((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <InputControl
          label="Email"
          placeholder="Enter Email Address"
          type="email"
          value={localUserData.email}
          onChange={(event) =>
            setLocalUserData((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputControl
          label="Password"
          placeholder="Enter Password"
          type="password"
          value={localUserData.password}
          onChange={(event) =>
            setLocalUserData((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          }
        />

        {errorMessage != "" && (
          <p className="text-red-500 font-Arvo">{errorMessage}</p>
        )}

        <div className="w-full m-2">
          {
            signUpInProcess ? (
              <button
            className="bg-gray-400 border rounded p-2 w-full font-Arvo text-lg"
            onClick={handleClick} disabled = {true}
          >
            Sign Up
          </button>
            ): (
              <button
            className="bg-green-400 border rounded p-2 w-full font-Arvo text-lg"
            onClick={handleClick}
          >
            Sign Up
          </button>
            )
          }
          
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
