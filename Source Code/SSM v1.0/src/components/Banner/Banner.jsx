import React from "react";
import sateliteImg from "../../assets/Bn1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              data-aos="zoom-in"
              src={sateliteImg}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
            About US
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-cyan-500 to-whit "
            >
              What Is SSM?
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Sistem Smart Space Management (SSM) adalah solusi berbasis
              teknologi IoT yang dirancang untuk mengelola dan memonitor
              penggunaan ruang atau gedung secara efisien. Dengan SSM, manajer
              fasilitas dan pengguna dapat memantau penggunaan ruang secara
              real-time, mengoptimalkan pemanfaatan, dan memfasilitasi proses
              reservasi untuk berbagai jenis acara atau kebutuhan kantor. Sistem
              ini berfokus pada pemantauan ruang dan reservasi otomatis yang
              dapat meningkatkan efektivitas penggunaan ruang, mengurangi
              pemborosan, dan memberikan pengalaman pengguna yang lebih baik.
            </p>
            <Link to="/aboutus">
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button bg-gradient-to-r from-purple-700 via-indigo-500 to-cyan"
            >
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
