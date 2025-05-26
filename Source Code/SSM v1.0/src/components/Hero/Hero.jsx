import React from "react";
import { Link } from "react-router-dom";

// import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1
              data-aos="fade-up"
              className="text-5xl font-bold uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-cyan-500 to-white"
            >
              Smart Space
              <br />
              Better Work
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              SSM menghadirkan sistem reservasi dan manajemen <br /> gedung yang
              cerdas, terstruktur, dan siap mendukung <br /> kebutuhan ruang
              kerja modern
            </p>
<Link to="/login">
  <button
    data-aos="fade-up"
    data-aos-delay="500"
    className="primary-button bg-gradient-to-r from-purple-700 via-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
  >
    Get Started
  </button>
</Link>
          </div>
          <div></div>
        </div>
      </div>
      {/* surgace section
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      /> */}
      {/* bottom gradient section */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
