import React, { useState, useEffect } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/Config";
// import { ref, onValue } from "firebase/database";
// import { realtimeDB } from "../../firebase/Config"; // ✅ pastikan ini sesuai


const Monitoring = () => {
  const [sensorData, setSensorData] = useState({
    suhu: 0,
    gerakan: false,
    kamera: false,
  });

  useEffect(() => {
    const sensorRef = ref(db, "rooms/A201");
    // const sensorRef = ref(realtimeDB, "rooms/A201");

    const unsubscribe = onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensorData(data);
      }
    });

    return () => unsubscribe();
  }, []);

  const statusRuangan =
    sensorData.suhu <= 30 && sensorData.gerakan && sensorData.kamera
      ? "Ada Orang"
      : "Kosong";

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 p-6 ml-64">
        <h2 className="text-2xl font-bold mb-4">Monitoring Ruangan A201</h2>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4 w-full max-w-md">
          <p className="text-lg font-semibold">
            Ruangan A201:{" "}
            <span
              className={`${
                statusRuangan === "Ada Orang" ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {statusRuangan}
            </span>
          </p>
          <div>
            <p>🌡️ Suhu: {sensorData.suhu}°C</p>
            <p>📡 Gerakan: {sensorData.gerakan ? "Ada" : "Tidak Ada"}</p>
            <p>🧍 Kamera: {sensorData.kamera ? "Ada Orang" : "Tidak Ada"}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Monitoring;
