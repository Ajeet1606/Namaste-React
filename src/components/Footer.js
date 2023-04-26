// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const Footer = () => {

  // const {user} = useContext(UserContext);

  return (
    <>
      <div className="p-5 mb-0 bg-blue-900">
        <div className="flex justify-evenly">
          <span className="text-white text-xl font-Arvo">Home</span>
          <span className="text-white text-xl font-Arvo">About Us</span>
          <span className="text-white text-xl font-Arvo">Careers</span>
          <span className="text-white text-xl font-Arvo">Opportunites</span>
        </div>

        <h5 className="mt-5 text-center text-md font-Arvo text-white">
          Copyright @foodStudio 2023
        </h5>
      </div>
    </>
  )
};

export default Footer;
