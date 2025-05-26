// import React from "react";
// import { Link } from "react-router-dom";

// const SidebarAdmin = () => {
//   return (
//     <aside className="w-64 h-screen bg-gray-800 text-white fixed md:relative z-10">
//       <div className="p-4 text-2xl font-bold border-b border-gray-700">Admin</div>
//       <nav className="p-4 space-y-4">
//         <Link to="/admin/profile" className="block hover:text-blue-400">Profil</Link>
//         <Link to="/admin/manage-users" className="block hover:text-blue-400">Kelola User</Link>
//         <Link to="/admin/monitoring" className="block hover:text-blue-400">Monitoring</Link>
//       </nav>
//     </aside>
//   );
// };

// export default SidebarAdmin;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { User, Monitor, BarChart, Home, Settings } from "lucide-react";

// const SidebarAdmin = () => {
//   const location = useLocation();

//   const menu = [
//     { path: "/admin/profile", label: "Profil", icon: <User size={20} /> },
//     { path: "/admin/user", label: "Kelola User", icon: <User size={20} /> },
//     { path: "/admin/monitoring", label: "Monitoring", icon: <Monitor size={20} /> },
//     { path: "/admin/analytics", label: "Analisis", icon: <BarChart size={20} /> },
//     { path: "/admin/customers", label: "Pemesan", icon: <Home size={20} /> },
//     { path: "/admin/setting", label: "Setting", icon: <Settings size={20} /> },
//   ];

//   return (
//     <div className="h-screen w-64 bg-gray-900 text-white p-5 fixed">
//       <h1 className="text-2xl font-bold mb-10">SmartSpace 🔧</h1>
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

// export default SidebarAdmin;
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { User, Monitor, BarChart, Home, ClipboardList, Settings, Building2 } from "lucide-react";

// const SidebarAdmin = () => {
//   const location = useLocation();

//   const menu = [
//     { path: "/admin/profile", label: "Profil", icon: <User size={20} /> },
//     { path: "/admin/user", label: "Kelola User", icon: <User size={20} /> },
//     { path: "/admin/monitoring", label: "Monitoring", icon: <Monitor size={20} /> },
//     { path: "/admin/rooms", label: "Kelola Ruangan", icon: <Building2 size={20} /> }, // Tambahan di sini
//     { path: "/admin/analytics", label: "Analisis", icon: <BarChart size={20} /> },
//     { path: "/admin/customers", label: "Pemesan", icon: <Home size={20} /> },
//      {
//   path: "/admin/pesanan",
//   label: "Mengelola Pesanan",
//   icon: <ClipboardList size={20} />, // pastikan impor dari lucide-react
// },
//     { path: "/admin/setting", label: "Setting", icon: <Settings size={20} /> },
//   ];

//   return (
//     <div className="h-screen w-64 bg-gray-900 text-white p-5 fixed">
//       <h1 className="text-2xl font-bold mb-10">SmartSpace 🔧</h1>
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

// export default SidebarAdmin;
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, Monitor, BarChart, Home, ClipboardList, Settings, Building2, LogOut } from "lucide-react";

const SidebarAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { path: "/admin/profile", label: "Profil", icon: <User size={20} /> },
    { path: "/admin/user", label: "Kelola User", icon: <User size={20} /> },
    { path: "/admin/monitoring", label: "Monitoring", icon: <Monitor size={20} /> },
    { path: "/admin/rooms", label: "Kelola Ruangan", icon: <Building2 size={20} /> },
    { path: "/admin/analytics", label: "Analisis", icon: <BarChart size={20} /> },
    { path: "/admin/customers", label: "Pemesan", icon: <Home size={20} /> },
    { path: "/admin/pesanan", label: "Mengelola Pesanan", icon: <ClipboardList size={20} /> },
    { path: "/admin/setting", label: "Setting", icon: <Settings size={20} /> },
  ];

  const handleLogout = () => {
    // Hapus data user dari localStorage/sessionStorage atau state manapun
    localStorage.removeItem("user");
    // Redirect ke landing page
    navigate("/");
  };

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5 fixed flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">SmartSpace 🔧</h1>
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

      {/* Tombol Logout di bawah */}
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

export default SidebarAdmin;
