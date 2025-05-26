import React from "react";
import { FaCalendarDay, FaChartBar, FaReact, FaThermometer, FaThermometerQuarter } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave.gif";

const ServiceData = [
  {
    
    content: "room temperature",
    description:
      "Pantau suhu ruangan secara real-time untuk kenyamanan dan efisiensi",
    icon: <FaThermometerQuarter className="text-7xl" />,
    aosDelay: "300",
  },
  {
    
    content: "Reservasi",
    description:
      "Atur jadwal penggunaan ruang dengan cepat dan mudah melalui sistem kalender pintar",
    icon: <FaCalendarDay className="text-7xl" />,
    aosDelay: "500",
  },
  {
    
    content: "Visualisasi Data",
    description:
      "SSM menyajikan visualisasi data canggih untuk analisis informasi yang lebih efektif",
    icon: <FaChartBar className="text-7xl" />,
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-50">
            {ServiceData.map((data, index) => (
              <div
              key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-white-500/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
