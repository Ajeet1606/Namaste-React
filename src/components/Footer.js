import { Link } from "react-router-dom";
const Footer = () => {


  return (
    <>
      <div className="p-5 mb-0 bg-blue-900">
        <div className="flex justify-evenly">
          <span className="text-white text-xl font-Arvo cursor-pointer"><Link to="/">Home</Link></span>
          <span className="text-white text-xl font-Arvo cursor-pointer"><Link to="/about">About Us</Link></span>
          <span className="text-white text-xl font-Arvo cursor-pointer">Careers</span>
          <span className="text-white text-xl font-Arvo cursor-pointer">Opportunites</span>
        </div>

        <h5 className="mt-5 text-center text-md font-Arvo text-white">
          Copyright @foodStudio 2023
        </h5>
      </div>
    </>
  )
};

export default Footer;
