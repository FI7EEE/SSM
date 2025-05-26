import React from "react";
import SidebarAdmin from "../../components/SidebarAdmin";

const DashboardAdmin = () => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 p-6 ml-64">
        <h1 className="text-3xl font-semibold mb-4">Dashboard Admin</h1>
        <p>Selamat datang di panel admin.</p>
      </main>
    </div>
  );
};

export default DashboardAdmin;
