import React from "react";
import sateliteImg from "../../assets/Bn2.png";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              Our TIM
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-cyan-500 to-whit"
            >
              SSM TIM
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.
            </p>
            <Link to="/about">
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button bg-gradient-to-r from-purple-700 via-indigo-500 to-cyan"
            >
              Learn More
            </button>
            </Link>
          </div>
          <div data-aos="zoom-in">
            <img
              src={sateliteImg}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
