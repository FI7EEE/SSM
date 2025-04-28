import { BarChartIcon, BookOpenIcon } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

// Data for reservations to enable mapping
const reservations = [
  {
    id: 1,
    name: "Kentung",
    room: "A202",
    time: "07.00-12.00",
    temperature: "30°",
    status: "Pending",
    approved: true,
    rejected: false,
  },
  {
    id: 2,
    name: "Kucrut",
    room: "A203",
    time: "08.00-11.30",
    temperature: "27°",
    status: "Pending",
    approved: true,
    rejected: false,
  },
  {
    id: 3,
    name: "King",
    room: "A204",
    time: "09.00-13.00",
    temperature: "27°",
    status: "Disetujui",
    approved: true,
    rejected: false,
  },
];

export const DashboardAdmin = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1366px] h-[768px]">
        <div className="relative h-[770px] bg-[url(https://c.animaapp.com/ma0komcc3R6ob6/img/rectangle-21.svg)] bg-[100%_100%]">
          <div className="absolute w-[412px] top-[35px] left-[316px] font-['Poppins',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal]">
            MONITORING GEDUNG
          </div>

          {/* Sidebar */}
          <div className="absolute w-[298px] h-[768px] top-0 left-0 bg-[#2b0870]">
            <div className="absolute w-[119px] top-[167px] left-[59px] font-['Poppins',Helvetica] font-medium text-[#f3eeee] text-2xl tracking-[0] leading-[normal]">
              Reservasi
            </div>

            <div className="absolute w-[119px] top-[233px] left-[59px] font-['Poppins',Helvetica] font-medium text-[#f3eeee] text-2xl tracking-[0] leading-[normal]">
              Statisitik
            </div>

            <img
              className="absolute w-[293px] h-[132px] top-[151px] left-[5px]"
              alt="Line"
              src="https://c.animaapp.com/ma0komcc3R6ob6/img/line-8.svg"
            />

            <div className="absolute w-[35px] h-[35px] top-[170px] left-[15px] text-[#f3eeee]">
              <BookOpenIcon size={35} />
            </div>

            <div className="absolute w-[27px] h-[29px] top-[234px] left-[19px] text-[#f3eeee]">
              <BarChartIcon size={29} />
            </div>
          </div>

          {/* Room Status Card */}
          <Card className="absolute w-[1008px] h-[159px] top-[106px] left-[316px] bg-[#222222] rounded-[10px] border-none">
            <CardHeader className="p-0">
              <CardTitle className="absolute w-[412px] top-2 left-[15px] font-['Poppins',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
                STATUS RUANGAN
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="absolute w-[98px] h-[57px] top-[63px] left-[15px] bg-[#0da939] rounded-[14px] flex items-center justify-center">
                <div className="font-['Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  A204
                </div>
              </div>

              <div className="absolute w-[145px] h-[57px] top-[63px] left-[151px] bg-[#de0303] rounded-[14px] flex items-center justify-center">
                <div className="font-['Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Dipakai
                </div>
              </div>

              <div className="absolute w-[98px] h-[57px] top-[63px] left-[334px] bg-[#e36e08] rounded-[14px] flex items-center justify-center">
                <div className="font-['Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  27°
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reservation Management Card */}
          <Card className="absolute w-[1008px] h-[420px] top-[304px] left-[316px] bg-[#222121] rounded-[10px] border-none">
            <CardHeader className="p-0">
              <div className="w-[1008px] h-[81px] bg-[#100303] rounded-[8px_8px_0px_0px] flex items-center">
                <CardTitle className="ml-[17px] font-['Poppins',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
                  MANAJEME RESERVASI
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-none">
                    <TableHead className="text-white font-['Poppins',Helvetica] font-semibold text-xl pl-7">
                      Pemesanan
                    </TableHead>
                    <TableHead className="text-white font-['Poppins',Helvetica] font-semibold text-xl pl-[180px]">
                      Ruang
                    </TableHead>
                    <TableHead className="text-white font-['Poppins',Helvetica] font-semibold text-xl pl-[321px]">
                      Waktu
                    </TableHead>
                    <TableHead className="text-white font-['Inter',Helvetica] font-semibold text-xl pl-[465px]">
                      Suhu
                    </TableHead>
                    <TableHead className="text-white font-['Poppins',Helvetica] font-semibold text-xl pl-[572px]">
                      Status
                    </TableHead>
                    <TableHead className="text-white font-['Poppins',Helvetica] font-semibold text-xl pl-[739px]">
                      Yes&nbsp;&nbsp; /&nbsp;&nbsp;No
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservations.map((reservation) => (
                    <TableRow key={reservation.id} className="border-none">
                      <TableCell className="text-white font-['Poppins',Helvetica] font-medium text-xl pl-7">
                        {reservation.name}
                      </TableCell>
                      <TableCell className="text-white font-['Poppins',Helvetica] font-medium text-xl pl-[180px]">
                        {reservation.room}
                      </TableCell>
                      <TableCell className="text-white font-['Poppins',Helvetica] font-medium text-xl pl-[304px]">
                        {reservation.time}
                      </TableCell>
                      <TableCell className="text-white font-['Inter',Helvetica] font-medium text-xl pl-[465px]">
                        {reservation.temperature}
                      </TableCell>
                      <TableCell className="text-white font-['Poppins',Helvetica] font-medium text-xl pl-[572px]">
                        {reservation.status}
                      </TableCell>
                      <TableCell className="pl-[731px]">
                        <div className="flex gap-4">
                          <div className="w-[55px] h-[42px] bg-[#00ff08] rounded-[14px]"></div>
                          <div className="w-[55px] h-[42px] bg-[#cc0509] rounded-[14px]"></div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
