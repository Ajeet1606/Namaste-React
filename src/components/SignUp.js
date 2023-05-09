import { useContext, useState } from "react";
import InputControl from "./InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import UserContext from "../utils/UserContext";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [signUpInProcess, setSignUpInProcess] = useState(false);

  const [localUserData, setLocalUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //context
  const {setUserName} = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = () => {
    // console.warn(localUserData);
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
        await updateProfile(res.user, {
          displayName: localUserData.name,
        });
        setUserName(res.user.displayName);
        setSignUpInProcess(false);
        navigate("/login");
      })
      .catch((err) => {
        setSignUpInProcess(false);
        alert(err.code + " " + err.message);
      });

    setLocalUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-full ">
      <div className="w-1/2 flex flex-col items-center mx-auto border rounded border-gray-500  p-5 m-5">
        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          value={localUserData.name}
          onChange={(event) =>
            setLocalUserData((prev) => ({ ...prev, name: event.target.value }))
          }
        />

        <InputControl
          label="Email"
          placeholder="Enter Email Address"
          value={localUserData.email}
          onChange={(event) =>
            setLocalUserData((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputControl
          label="Password"
          placeholder="Enter Password"
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
