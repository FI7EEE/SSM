// src/pages/admin/Analytics.jsx
import React from "react";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function Analytics() {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="ml-64 p-6 w-full bg-gray-900 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-6">📊 Analisis Pemesanan</h2>
        
        {/* Tempatkan analisis chart atau tabel di sini */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p>Next Update</p>
        </div>
      </div>
    </div>
  );
}
