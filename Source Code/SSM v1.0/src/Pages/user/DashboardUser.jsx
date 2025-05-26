import React from "react";
import SidebarUser from "../../components/SidebarUser";

const DashboardUser = () => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <SidebarUser />
      <main className="flex-1 p-6 ml-64">
        <h1 className="text-3xl font-semibold mb-4">Dashboard Admin</h1>
        <p>Selamat datang di panel admin.</p>
      </main>
    </div>
  );
};

export default DashboardUser;
// import React, { useState } from "react";
// import SidebarUser from "../../components/SidebarUser";
// import { Menu } from "lucide-react";

// const DashboardUser = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <SidebarUser isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="flex-1 flex flex-col">
//         {/* Tombol hamburger untuk mobile */}
//         <header className="md:hidden flex items-center p-4 bg-gray-900 text-white">
//           <button onClick={toggleSidebar} aria-label="Open sidebar">
//             <Menu size={24} />
//           </button>
//           <h1 className="ml-4 text-xl font-bold">Dashboard User</h1>
//         </header>

//         <main className="flex-1 p-6 overflow-auto">
//           <h2 className="text-2xl font-bold mb-4">Konten Dashboard User</h2>
//           <p>Isi halaman dashboard user ada di sini.</p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardUser;
