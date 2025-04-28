import { CopyIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const GroupByAnima = () => {
  const teamMembers = [
    { name: "KHRISNA", role: "PROJECT MANAGER" },
    { name: "ROYYAN", role: "HARDWARE" },
    { name: "ADRIAN", role: "SOFTWARE" },
    { name: "BINTANG", role: "SOFTWARE" },
    { name: "ADIT", role: "3D DESIGN" },
  ];

  const contactInfo = [
    { icon: <MailIcon className="w-4 h-4" />, text: "Pens@example.id" },
    { icon: <PhoneIcon className="w-4 h-4" />, text: "+62 8887 7543 3333" },
    { icon: <CopyIcon className="w-4 h-4" />, text: "+62 7359 1923 1231" },
  ];

  const socialMedia = [
    {
      icon: (
        <img
          className="w-9 h-9 object-cover"
          alt="Instagram"
          src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/instagram.png"
        />
      ),
      url: "#",
    },
    {
      icon: (
        <img
          className="w-[35px] h-[35px]"
          alt="Facebook"
          src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/logos-facebook.svg"
        />
      ),
      url: "#",
    },
    {
      icon: (
        <div className="w-[35px] h-[35px] bg-[url(https://c.animaapp.com/ma0d8yj7HLnPJt/img/group.png)] bg-[100%_100%]" />
      ),
      url: "#",
    },
    {
      icon: (
        <img
          className="w-[35px] h-[35px]"
          alt="WhatsApp"
          src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/logos-whatsapp-icon.svg"
        />
      ),
      url: "#",
    },
  ];

  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-start mb-6">
              <div className="relative">
                <img
                  className="w-[114px] h-[70px]"
                  alt="Logo"
                  src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/logo1-1.png"
                />
                <img
                  className="absolute w-28 h-[23px] top-[26px] left-[51px]"
                  alt="Logo"
                  src="https://c.animaapp.com/ma0d8yj7HLnPJt/img/logo1-2.png"
                />
              </div>
            </div>
            <h3 className="font-bold text-sm mb-4 ml-20">
              Smart Space Management
            </h3>
            <p className="font-normal text-base mt-6">
              Pantau suhu ruangan secara real-time untuk kenyamanan dan
              efisiensi
            </p>
          </div>

          {/* Team Section */}
          <div className="col-span-1">
            <h2 className="font-bold text-[22px] mb-4">TEAM</h2>
            <div className="flex">
              <div className="mr-8">
                {teamMembers.map((member, index) => (
                  <p key={index} className="font-normal text-[13px] mb-1">
                    {member.name}
                  </p>
                ))}
              </div>
              <div>
                {teamMembers.map((member, index) => (
                  <p key={index} className="font-normal text-[13px] mb-1">
                    {member.role}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="col-span-1">
            <h2 className="font-bold text-[22px] mb-4">CONTACT US</h2>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="mr-2">{item.icon}</span>
                  <span className="font-normal text-[13px]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-span-1">
            <h2 className="font-bold text-[22px] mb-4">SOCIAL MEDIA</h2>
            <div className="flex space-x-2 mt-6">
              {socialMedia.map((social, index) => (
                <a key={index} href={social.url} className="block">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
