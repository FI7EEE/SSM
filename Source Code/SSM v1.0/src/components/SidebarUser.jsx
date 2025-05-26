// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { User, Monitor, CalendarDays, Bell } from "lucide-react"; // ✅ Tambahkan Monitor

// const SidebarUser = () => {
//   const location = useLocation();

//   const menu = [
//     { path: "/user/profile", label: "Profil", icon: <User size={20} /> },
//      { path: "/user/notifications", label: "Notifikasil", icon: <Bell size={20} /> },
//     { path: "/user/rooms", label: "Rooms", icon: <Monitor size={20} /> },
//   { path: "/user/reservasi", label: "Reservasi", icon: <CalendarDays size={20} /> },
//   ];

//   return (
//     <div className="h-screen w-64 bg-gray-900 text-white p-5 fixed">
//       <h1 className="text-2xl font-bold mb-10">SmartSpace</h1>
//       <ul className="space-y-4">
//         {menu.map((item) => (
//           <li key={item.path}>
//             <Link
//               to={item.path}
//               className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 ${
//                 location.pathname === item.path ? "bg-gray-800" : ""
//               }`}
//             >
//               {item.icon}
//               <span>{item.label}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default SidebarUser;
// // SidebarUser.jsx
// // import React from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { User, Monitor, CalendarDays, Bell, X } from "lucide-react";

// // const SidebarUser = ({ isOpen, toggleSidebar }) => {
// //   const location = useLocation();

// //   const menu = [
// //     { path: "/user/profile", label: "Profil", icon: <User size={20} /> },
// //     { path: "/user/notifications", label: "Notifikasi", icon: <Bell size={20} /> },
// //     { path: "/user/rooms", label: "Rooms", icon: <Monitor size={20} /> },
// //     { path: "/user/reservasi", label: "Reservasi", icon: <CalendarDays size={20} /> },
// //   ];

// //   return (
// //     <div
// //       className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 z-50 transform transition-transform duration-300
// //       ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
// //     >
// //       <div className="flex justify-between items-center mb-10">
// //         <h1 className="text-2xl font-bold">SmartSpace</h1>
// //         {/* Tombol tutup hanya muncul di mobile */}
// //         <button onClick={toggleSidebar} className="md:hidden">
// //           <X size={24} />
// //         </button>
// //       </div>
// //       <ul className="space-y-4">
// //         {menu.map((item) => (
// //           <li key={item.path}>
// //             <Link
// //               to={item.path}
// //               className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 ${
// //                 location.pathname === item.path ? "bg-gray-800" : ""
// //               }`}
// //             >
// //               {item.icon}
// //               <span>{item.label}</span>
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SidebarUser;
// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { User, Monitor, CalendarDays, Bell, LogOut } from "lucide-react";

// const SidebarUser = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const menu = [
//     { path: "/user/profile", label: "Profil", icon: <User size={20} /> },
//     { path: "/user/notifications", label: "Notifikasi", icon: <Bell size={20} /> },
//     { path: "/user/rooms", label: "Rooms", icon: <Monitor size={20} /> },
//     { path: "/user/reservasi", label: "Reservasi", icon: <CalendarDays size={20} /> },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem("user"); // atau sesuaikan nama key localStorage kamu
//     navigate("/"); // redirect ke landing page
//   };

//   return (
//     <div className="h-screen w-64 bg-gray-900 text-white p-5 fixed flex flex-col justify-between">
//       <div>
//         <h1 className="text-2xl font-bold mb-10">SmartSpace</h1>
//         <ul className="space-y-4">
//           {menu.map((item) => (
//             <li key={item.path}>
//               <Link
//                 to={item.path}
//                 className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 ${
//                   location.pathname === item.path ? "bg-gray-800" : ""
//                 }`}
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Logout Button */}
//       <button
//         onClick={handleLogout}
//         className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-700 bg-red-600 mt-10"
//       >
//         <LogOut size={20} />
//         <span>Logout</span>
//       </button>
//     </div>
//   );
// };

// export default SidebarUser;
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, Monitor, CalendarDays, Bell, LogOut } from "lucide-react";

const SidebarUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { path: "/user/profile", label: "Profil", icon: <User size={20} /> },
    { path: "/user/notifications", label: "Notifikasi", icon: <Bell size={20} /> },
    { path: "/user/rooms", label: "Rooms", icon: <Monitor size={20} /> },
    { path: "/user/reservasi", label: "Reservasi", icon: <CalendarDays size={20} /> },
  ];

  const handleLogout = () => {
    // Hapus data user / session
    localStorage.removeItem("user");
    // Redirect ke landing page
    navigate("/");
  };

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5 fixed flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">SmartSpace</h1>
        <ul className="space-y-4">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 ${
                  location.pathname === item.path ? "bg-gray-800" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-700 text-red-500 w-full"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default SidebarUser;
