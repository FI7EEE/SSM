import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const GroupWrapperByAnima = () => {
  // Navigation menu items
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "FEATURES", href: "#" },
    { label: "CONTACT US", href: "#" },
    { label: "LOG IN", href: "#" },
  ];

  return (
    <div className="relative w-full h-[768px]">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full pl-[93px]">
          {/* Sign Up Button */}
          <div className="absolute w-[101px] h-12 top-[34px] right-[91px] bg-[#ffffff80] rounded-[20px] flex items-center justify-center">
            <span className="font-bold text-black text-xl">SIGN UP</span>
          </div>

          {/* Background Image */}
          <img
            className="absolute w-[773px] h-[768px] top-0 right-0"
            alt="Mask group"
            src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/mask-group.png"
          />

          {/* Main Heading with Gradient */}
          <div className="absolute w-[512px] top-[225px] left-0 [background:linear-gradient(90deg,rgba(38,0,252,1)_0%,rgba(254,128,245,1)_50%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[40px] tracking-[0] leading-normal">
            Streamline Space, Enhance Productivity.
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="absolute top-[43px] left-[477px]">
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl tracking-[0] leading-normal"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo Section */}
        <div className="absolute w-[364px] h-[70px] top-2 left-[52px]">
          <img
            className="absolute w-[114px] h-[70px] top-0 left-0"
            alt="Logo"
            src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/logo1-1-1.png"
          />
          <img
            className="absolute w-28 h-[23px] top-[26px] left-[51px]"
            alt="Logo"
            src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/logo1-2-1.png"
          />
          <div className="absolute w-[284px] top-[50px] left-20 [font-family:'Poppins',Helvetica] font-bold text-white text-sm tracking-[0] leading-normal">
            Smart Space Management
          </div>
        </div>

        {/* Description Text */}
        <div className="absolute w-[473px] top-[359px] left-[93px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal">
          SSM menghadirkan sistem reservasi dan manajemen gedung yang cerdas,
          terstruktur, dan siap mendukung kebutuhan ruang kerja modern
        </div>

        {/* Get Started Button */}
        <Button className="absolute w-[180px] h-[65px] top-[510px] left-[93px] bg-gradient-to-r from-blue-600 to-purple-500 rounded-md [font-family:'Poppins',Helvetica] font-bold text-white text-xl">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};
