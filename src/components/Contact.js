import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PathContext from "../utils/PathContext";
import InputControl from "./InputControl";

const Contact = () => {

  const {setCurrentPath} = useContext(PathContext);
  const {pathname} = useLocation();

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleClick = () => {
      if(!data.name || !data.email || !data.message){
          alert("fill every field");
      }
      else alert("Message Submitted Successfully");
      setData({
          name: "",
          email: "",
          message: ""
      })
  }

  useEffect(() => {
    setCurrentPath(pathname);
  }, [])

  return (
    <>
      <div className="min-h-screen p-10 flex flex-col items-center">
        <InputControl label="Name" placeholder="Enter Your Name" 
        value = {data.name} 
        onChange = {(event) => setData((prev) => ({
            ...prev, 
            name: event.target.value,
            }))
        }
        ></InputControl>

        <InputControl
          label="Email"
          placeholder="Enter Your Email"
          value = {data.email}
          onChange = {(event) => setData((prev) => ({
              ...prev, 
              email: event.target.value,
          }))}
        ></InputControl>

        <InputControl
          label="Message"
          placeholder="Enter the message"
          value = {data.message}
          onChange = {(event) => setData((prev) => ({
              ...prev,
              message: event.target.value,
          }))}

        ></InputControl>

        <button className="bg-green-400 py-2 px-5 border rounded font-Arvo"
        onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Contact;
