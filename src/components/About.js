import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import PathContext from "../utils/PathContext";

const About = () => {
  const {setCurrentPath} = useContext(PathContext);
  const {pathname} = useLocation();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [])
  
  return (
    <>
      <div className="p-20 bg-orange-300 text-2xl font-Arvo">
        ″Our mission is to elevate the quality of life for the urban consumer
        with unparalleled convenience. Convenience is what makes us tick. It's
        what makes us get out of bed and say, "Let's do this."
      </div>

      <img src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg" alt="" />

      <h1 className="text-center my-9 text-5xl">What’s In Store For The Future?</h1>

      <h4 className="text-center text-xl mx-20 my-10">Food Studio has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</h4>

      <div className="flex justify-between m-10">
          <h2 className="text-6xl w-3/4">Changing <b>the Game</b></h2>
          <div className="flex">
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>150000+</b> Restaurant Partners Countrywide</p></span>
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>260000+</b> Delivery Executives</p></span>
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>5000+</b> Employees across the Country</p></span>
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>500+</b> Cites PAN India</p></span>
              
          </div>
      </div>
    </>
  );
};

export default About;
