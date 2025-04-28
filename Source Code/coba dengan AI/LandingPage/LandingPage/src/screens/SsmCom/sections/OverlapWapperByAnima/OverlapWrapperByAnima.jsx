import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = () => {
  const features = [
    {
      id: 1,
      title: "Temperature Monitoring",
      description:
        "Pantau suhu ruangan secara real-time untuk kenyamanan dan efisiensi",
      iconSrc: "https://c.animaapp.com/ma0d8yj7HLnPJt/img/thermometer.png",
      iconAlt: "Thermometer",
    },
    {
      id: 2,
      title: "Smart Scheduling",
      description:
        "Atur jadwal penggunaan ruang dengan cepat dan mudah melalui sistem kalender pintar",
      iconSrc: "https://c.animaapp.com/ma0d8yj7HLnPJt/img/calendar.png",
      iconAlt: "Calendar",
    },
    {
      id: 3,
      title: "Instant Notifications",
      description:
        "Dapatkan pemberitahuan langsung untuk semua update, pengingat, dan aktivitas penting",
      iconSrc: "https://c.animaapp.com/ma0d8yj7HLnPJt/img/notification.png",
      iconAlt: "Notification",
    },
  ];

  return (
    <section className="relative w-full h-[779px] bg-[#110725]">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-[#0a021b] backdrop-blur-[250px]" />

        <div className="relative flex flex-col items-center pt-[74px] px-4">
          <h2 className="text-[40px] font-bold font-['Poppins',Helvetica] bg-gradient-to-r from-[rgba(38,0,252,1)] via-[rgba(254,128,245,1)] to-[rgba(255,255,255,1)] bg-clip-text text-transparent">
            Features
          </h2>

          <p className="mt-[13px] text-xl font-normal font-['Poppins',Helvetica] text-white">
            We are going New, Lets try first
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-[80px]">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="w-[300px] h-[295px] rounded-[20px] backdrop-blur-[2px] bg-gradient-to-r from-[rgba(38,0,252,0.2)] via-[rgba(254,128,245,0.2)] to-[rgba(255,255,255,0.2)] border-none"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="w-[90px] h-[73px] mt-8 bg-white rounded-[20px] flex items-center justify-center">
                      <img
                        className="w-auto h-auto max-w-[45px] max-h-[47px] object-cover"
                        alt={feature.iconAlt}
                        src={feature.iconSrc}
                      />
                    </div>
                    <h3 className="mt-[10px] px-4 font-['Poppins',Helvetica] font-bold text-white text-[22px]">
                      {feature.title}
                    </h3>
                    <p className="mt-[5px] px-4 font-['Poppins',Helvetica] font-normal text-white text-base">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
