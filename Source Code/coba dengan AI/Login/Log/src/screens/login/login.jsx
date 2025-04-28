import { LogInIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Login = () => {
  // Login form data
  const loginOptions = [
    { id: 1, label: "SIGN UP" },
    { id: 2, label: "HOME" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white [background:linear-gradient(153deg,rgba(17,7,37,1)_0%,rgba(249,247,255,1)_55%,rgba(85,4,246,1)_100%)] bg-[url(https://c.animaapp.com/ma0devh0QiuWYt/img/rectangle-19.svg)] bg-[100%_100%] w-full max-w-[1366px] h-[768px] relative">
        {/* Login Card Container */}
        <div className="absolute w-[580px] h-[580px] top-[114px] left-0">
          {/* Semi-transparent card background */}
          <Card className="w-[352px] h-[315px] top-[114px] left-[140px] rounded-[20px] absolute bg-[#ffffffb2] border-none">
            <CardContent className="p-0">
              {/* Background vector image */}
              <div className="absolute w-[580px] h-[580px] top-0 left-0">
                <div className="relative w-[464px] h-[464px] top-[58px] left-[58px] bg-[url(https://c.animaapp.com/ma0devh0QiuWYt/img/vector.svg)] bg-[100%_100%]">
                  <img
                    className="w-[225px] h-px top-[210px] left-[95px] absolute object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/ma0devh0QiuWYt/img/line-1.svg"
                  />

                  <img
                    className="w-[225px] h-px top-[251px] left-[95px] absolute object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/ma0devh0QiuWYt/img/line-2.svg"
                  />

                  <img
                    className="absolute w-4 h-4 top-[234px] left-[95px]"
                    alt="Carbon password"
                    src="https://c.animaapp.com/ma0devh0QiuWYt/img/carbon-password.svg"
                  />

                  <img
                    className="w-px h-3.5 top-[299px] left-[276px] absolute object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/ma0devh0QiuWYt/img/line-3.svg"
                  />
                </div>
              </div>

              {/* Login Title */}
              <h1 className="absolute w-[142px] top-[127px] left-[174px] font-['Inter',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                LOGIN
              </h1>

              {/* Username Field */}
              <div className="absolute w-[232px] top-[252px] left-[183px] font-['Inter',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[normal]">
                Username
              </div>

              {/* Navigation Links */}
              <div className="flex absolute top-[356px] left-[285px] gap-4">
                {loginOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="link"
                    className="p-0 h-auto font-['Inter',Helvetica] font-bold text-white text-[11px] tracking-[0] leading-[normal]"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>

              {/* Password Field */}
              <div className="absolute w-[232px] top-[292px] left-[183px] font-['Inter',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[normal]">
                Password
              </div>

              {/* User Icon */}
              <UserIcon className="absolute w-6 h-6 top-[245px] left-[150px] text-white" />

              {/* Login Button */}
              <Button
                className="w-56 h-[34px] top-[316px] left-[154px] rounded-[10px] absolute bg-[#ffffffb2] hover:bg-white/80"
                variant="ghost"
              >
                <LogInIcon className="w-6 h-6 text-white" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right side image */}
        <img
          className="absolute w-[614px] h-[768px] top-0 left-[752px] object-cover"
          alt="Chatgpt image"
          src="https://c.animaapp.com/ma0devh0QiuWYt/img/chatgpt-image-27-apr-2025--16-52-38-2.png"
        />
      </div>
    </div>
  );
};
