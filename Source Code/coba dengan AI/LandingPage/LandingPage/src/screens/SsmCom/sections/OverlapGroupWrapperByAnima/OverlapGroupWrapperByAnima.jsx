import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapGroupWrapperByAnima = () => {
  return (
    <section className="relative w-full py-16 bg-[#110725]">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8 px-4 md:px-6">
        <div className="relative w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-1">
          <div className="relative h-[401px]">
            <img
              className="absolute w-[131px] h-[126px] top-[58px] left-[257px]"
              alt="Vector graphic"
              src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/vector-1.svg"
            />
            <img
              className="absolute w-[381px] h-[350px] top-0 left-0"
              alt="SSM illustration"
              src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/group-1.png"
            />
            <img
              className="absolute w-[130px] h-[109px] top-[292px] left-[38px]"
              alt="Vector graphic"
              src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/vector-2.svg"
            />
            <img
              className="absolute w-20 h-[71px] top-[306px] left-[59px]"
              alt="Vector graphic"
              src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/vector.svg"
            />
          </div>
        </div>

        <Card className="border-none shadow-none bg-transparent order-1 lg:order-2 w-full max-w-2xl">
          <CardContent className="p-0">
            <h2 className="mb-6 [background:linear-gradient(90deg,rgba(38,0,252,1)_0%,rgba(254,128,245,1)_50%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-bold font-['Poppins',Helvetica] text-5xl">
              WHAT IS
              <br />
              SSM ?
            </h2>
            <p className="text-white font-['Poppins',Helvetica] font-bold text-base">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
