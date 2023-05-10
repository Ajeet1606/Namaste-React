import { useState, useContext} from "react";
import InputControl from "./InputControl";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux"; 
import { setUser } from "../utils/userSlice";

const Login = () => {
  const [loginInProcess, setLoginInProcess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [localUserData, setLocalUserData] = useState({
    email: "",
    password: "",
  });

  //context
  const {setUserName} = useContext(UserContext);

  const navigate = useNavigate();

  //store operations
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.warn(localUserData);
    if (!localUserData.email || !localUserData.password) {
      setErrorMessage("Please fill every field");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);

      return;
    }

    //verify details from firebase database
    setLoginInProcess(true);
    signInWithEmailAndPassword(
      auth,
      localUserData.email,
      localUserData.password
    )
      .then((res) => {
        const user = res.user;
        setUserName(user.displayName);
        setLoginInProcess(false);
        //dispatch this user to user slice in store.
        dispatch(setUser(localUserData));
        navigate("/");
      })
      .catch((err) => {
        setLoginInProcess(false);
        alert(err.code + " " + err.message);
      });

    setLocalUserData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="w-full h-full ">
        <div className="w-1/2 flex flex-col items-center mx-auto border rounded border-gray-500  p-5 m-5">
          <InputControl
            label="Email"
            placeholder="Enter Email Address"
            value={localUserData.email}
            onChange={(event) =>
              setLocalUserData((prev) => ({
                ...prev,
                email: event.target.value,
              }))
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
              loginInProcess ? (
                <button
              className="bg-gray-500 border rounded p-2 w-full font-Arvo text-lg" disabled={true}
              onClick={handleClick}
            >
              Log In
            </button>
              ): (
                <button
              className="bg-green-400 border rounded p-2 w-full font-Arvo text-lg"
              onClick={handleClick}
            >
              Log In
            </button>
              )
            }
          </div>

          <p className="font-Arvo">
            Don't have an account,
            <Link to="/signup">
              <span className="text-blue-500 hover:cursor-pointer">
                {" "}
                Sign Up{" "}
              </span>
            </Link>{" "}
            to continue.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
