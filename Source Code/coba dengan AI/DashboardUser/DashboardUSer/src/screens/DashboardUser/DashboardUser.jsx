import { CalendarIcon, LogInIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const DashboardUser = () => {
  // Data for reservation rows
  const reservations = [
    { id: 1, room: "A202", temperature: "30°", hasButton: true },
    { id: 2, room: "A203", temperature: "27°", hasButton: true },
    { id: 3, room: "A204", temperature: "27°", hasButton: true },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1366px] h-[768px]">
        <div className="relative h-[768px]">
          {/* Main background */}
          <div className="absolute w-full h-full top-0 left-0 bg-[#110725]" />

          {/* Sidebar */}
          <div className="absolute w-[298px] h-full top-0 left-0 bg-[#2b0870]">
            <Separator className="w-full h-px bg-white/20 absolute top-32" />

            <div className="flex items-center gap-2 absolute top-[139px] left-4">
              <div className="w-[27px] h-[27px]">
                <img
                  className="w-5 h-6 mt-0.5 ml-[3px]"
                  alt="Notification icon"
                  src="https://c.animaapp.com/ma0q1ffcftK9Iv/img/group.png"
                />
              </div>
              <div className="font-medium text-[#f3eeee] text-2xl font-['Poppins',Helvetica]">
                Notifikasi
              </div>
            </div>

            <Separator className="w-full h-px bg-white/20 absolute top-[180px]" />

            <div className="flex items-center gap-2 absolute top-[191px] left-3">
              <img
                className="w-[35px] h-[35px]"
                alt="Reservation icon"
                src="https://c.animaapp.com/ma0q1ffcftK9Iv/img/material-symbols-light-book-outline.svg"
              />
              <div className="font-medium text-[#f3eeee] text-2xl font-['Poppins',Helvetica]">
                Reservasi
              </div>
            </div>

            <Separator className="w-full h-px bg-white/20 absolute top-[235px]" />
          </div>

          {/* Main content */}
          <Card className="absolute w-[1008px] h-[395px] top-6 left-[316px] bg-[#222121] rounded-[10px] border-none shadow-none">
            <CardHeader className="p-0 h-[81px] bg-[#100303] rounded-[8px_8px_0px_0px]">
              <CardTitle className="p-[14px] font-['Poppins',Helvetica] font-bold text-white text-[32px]">
                FORM RESERVASI
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Table headers */}
              <div className="flex mt-[38px] ml-[28px] text-white">
                <div className="w-[125px] font-['Poppins',Helvetica] font-semibold text-xl">
                  Pemesan
                </div>
                <div className="w-[125px] ml-[27px] font-['Poppins',Helvetica] font-semibold text-xl">
                  Ruang
                </div>
                <div className="w-[125px] ml-[16px] font-['Poppins',Helvetica] font-semibold text-xl">
                  Waktu
                </div>
                <div className="w-[125px] ml-[19px] font-['Inter',Helvetica] font-semibold text-xl">
                  Suhu
                </div>
                <div className="w-[125px] ml-[0px] font-['Poppins',Helvetica] font-semibold text-xl">
                  Reservasi
                </div>
              </div>

              {/* Reservation rows */}
              {reservations.map((reservation, index) => (
                <div
                  key={reservation.id}
                  className="flex items-center mt-[30px] ml-[28px]"
                >
                  {/* Pemesan */}
                  <div className="relative mr-[27px]">
                    <div className="w-[98px] h-[49px] bg-[#d9d9d9] rounded-[20px]" />
                    <Separator className="w-16 h-px absolute -bottom-[10px] left-[17px] bg-white" />
                  </div>

                  {/* Ruang */}
                  <div className="w-[125px] font-['Poppins',Helvetica] font-medium text-white text-xl">
                    {reservation.room}
                  </div>

                  {/* Waktu */}
                  <div className="ml-[27px]">
                    <CalendarIcon className="w-[52px] h-[52px] text-white" />
                  </div>

                  {/* Suhu */}
                  <div className="w-[125px] ml-[85px] font-['Inter',Helvetica] font-medium text-white text-xl">
                    {reservation.temperature}
                  </div>

                  {/* Reservasi */}
                  <div className="ml-[25px]">
                    <Button className="w-[46px] h-[29px] bg-[#0558cc] rounded-[14px] p-0 flex items-center justify-center">
                      <LogInIcon className="w-[26px] h-[26px] text-white" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
