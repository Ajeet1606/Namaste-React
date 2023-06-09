import { Link } from "react-router-dom";
const Footer = () => {


  return (
    <div className="flex justify-around bg-black text-white font-Arvo px-5 py-10">
      <div>
        <h1 className="my-4 text-[#9e9a9a] font-bold">COMPANY</h1>
        <ul className="cursor-pointer">
          <li className="my-2">About Us</li>
          <li className="my-2">Team</li>
          <li className="my-2">Careers</li>
          <li className="my-2">Food Studio Blog</li>
          <li className="my-2">Bug Bounty</li>
          <li className="my-2">Food Studio One</li>
          <li className="my-2">Food Studio Corporate</li>
        </ul>
      </div>

      <div>
        <h1 className="my-4 text-[#9e9a9a] font-bold">CONTACT</h1>
        <ul className="cursor-pointer">
          <li className="my-2">Help and Support</li>
          <li className="my-2">Partner With Us</li>
          <li className="my-2">Ride With Us</li>
        </ul>
      </div>

      <div>
        <h1 className="my-4 text-[#9e9a9a] font-bold">LEGAL</h1>
        <ul className="cursor-pointer">
          <li className="my-2">Terms and Conditions</li>
          <li className="my-2">Refund and Cancellation</li>
          <li className="my-2">Privacy Policy</li>
          <li className="my-2">Cookie Policy</li>
          <li className="my-2">Offer Terms</li>
        </ul>
      </div>

      <div>
        <img className="cursor-pointer my-2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />
        <img className="cursor-pointer my-2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />
      </div>
    </div>
  )
};

export default Footer;
