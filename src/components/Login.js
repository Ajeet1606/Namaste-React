import InputControl from "./InputControl";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="w-1/2 flex flex-col items-center mx-auto border rounded border-gray-500  p-5 m-5">
          <InputControl label="Email" placeholder="Enter Email Address" />
          <InputControl label="Password" placeholder="Enter Password" />

          <div className="w-full m-2">
            <button className="bg-green-400 border rounded p-2 w-full font-Arvo text-lg">
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
