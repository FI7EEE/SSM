// import React, { useState } from "react";
// import SidebarAdmin from "../../components/SidebarAdmin";

// const initialRooms = [
//   { id: "A201", status: "Tersedia" },
//   { id: "A202", status: "Tersedia" },
//   { id: "A203", status: "Dalam Perbaikan" },
//   { id: "A204", status: "Tersedia" },
//   { id: "A205", status: "Tersedia" },
// ];

// const ManageRooms = () => {
//   const [rooms, setRooms] = useState(initialRooms);

//   const toggleStatus = (roomId) => {
//     setRooms((prev) =>
//       prev.map((room) =>
//         room.id === roomId
//           ? {
//               ...room,
//               status:
//                 room.status === "Tersedia" ? "Dalam Perbaikan" : "Tersedia",
//             }
//           : room
//       )
//     );
//   };

//   const deleteRoom = (roomId) => {
//     setRooms((prev) => prev.filter((room) => room.id !== roomId));
//   };

//   return (
//     <div className="flex bg-gray-900 text-white min-h-screen">
//       <SidebarAdmin />
//       <div className="ml-64 p-6 text-white bg-gray-800 min-h-screen">
//         <h2 className="text-2xl font-bold mb-6">Kelola Ruangan</h2>
//         <div className="space-y-4">
//           {rooms.map((room) => (
//             <div
//               key={room.id}
//               className="flex items-center justify-between bg-gray-700 p-4 rounded-md"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold">{room.id}</h3>
//                 <p
//                   className={`text-sm ${
//                     room.status === "Tersedia"
//                       ? "text-green-400"
//                       : "text-yellow-400"
//                   }`}
//                 >
//                   {room.status}
//                 </p>
//               </div>
//               <div className="space-x-2">
//                 <button
//                   onClick={() => toggleStatus(room.id)}
//                   className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
//                 >
//                   Toggle Status
//                 </button>
//                 <button
//                   onClick={() => deleteRoom(room.id)}
//                   className="px-3 py-1 bg-red-600 rounded hover:bg-red-500"
//                 >
//                   Hapus
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageRooms;
// src/pages/admin/ManageRooms.jsx
import React, { useEffect, useState } from "react";
import { dbFirestore } from "../../firebase/Config"; // pastikan ini sudah ada
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import SidebarAdmin from "../../components/SidebarAdmin";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  const roomsRef = collection(dbFirestore, "rooms");

  const fetchRooms = async () => {
    const snapshot = await getDocs(roomsRef);
    const roomList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRooms(roomList);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleAddRoom = async () => {
    if (roomName.trim() === "") return;
    await addDoc(roomsRef, { name: roomName, status: "available" });
    setRoomName("");
    fetchRooms();
  };

  const handleDeleteRoom = async (id) => {
    await deleteDoc(doc(dbFirestore, "rooms", id));
    fetchRooms();
  };

  const toggleMaintenance = async (id, currentStatus) => {
    const newStatus = currentStatus === "available" ? "maintenance" : "available";
    await updateDoc(doc(dbFirestore, "rooms", id), { status: newStatus });
    fetchRooms();
  };

  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="ml-64 p-6 w-full bg-gray-900 text-white min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Kelola Ruangan</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Nama ruangan (misal A201)"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="p-2 rounded text-black mr-2"
          />
          <button onClick={handleAddRoom} className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
            Tambah
          </button>
        </div>

        <div className="space-y-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-gray-700 p-4 rounded flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{room.name}</p>
                <p className={`text-sm ${room.status === "maintenance" ? "text-yellow-300" : "text-green-300"}`}>
                  {room.status === "maintenance" ? "Dalam Perbaikan" : "Tersedia"}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => toggleMaintenance(room.id, room.status)}
                  className="bg-yellow-600 px-3 py-1 rounded hover:bg-yellow-700"
                >
                  {room.status === "available" ? "Perbaikan" : "Selesai"}
                </button>
                <button
                  onClick={() => handleDeleteRoom(room.id)}
                  className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageRooms;
