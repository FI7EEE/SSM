// import React, { useEffect, useState } from "react";
// import SidebarUser from "../../components/SidebarUser";
// import { dbFirestore } from "../../firebase/Config"; // Pastikan path ini benar
// import { collection, getDocs } from "firebase/firestore";

// const RoomsUser = () => {
//   const [rooms, setRooms] = useState([]);

//   const fetchRooms = async () => {
//     const snapshot = await getDocs(collection(dbFirestore, "rooms"));
//     const roomList = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setRooms(roomList);
//   };

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   return (
//     <div className="flex">
//       <SidebarUser />
//       <div className="ml-64 p-6 w-full bg-gray-800 text-white min-h-screen">
//         <h2 className="text-2xl font-bold mb-4">Daftar Ruangan</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {rooms.map((room) => (
//             <div key={room.id} className="bg-gray-700 p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">{room.name}</h3>
//               <p
//                 className={`text-sm mt-2 ${
//                   room.status === "available" ? "text-green-400" : "text-yellow-300"
//                 }`}
//               >
//                 {room.status === "available" ? "Tersedia" : "Dalam Perbaikan"}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default RoomsUser;
// import React, { useEffect, useState } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";

// const UserRooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     // Listen realtime perubahan di koleksi "rooms"
//     const unsub = onSnapshot(collection(dbFirestore, "rooms"), (snapshot) => {
//       const roomsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setRooms(roomsData);
//     }, (error) => {
//       console.error("Error fetching rooms: ", error);
//     });

//     // Cleanup listener saat komponen unmount
//     return () => unsub();
//   }, []);

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-semibold mb-4">Daftar Ruangan</h2>
//       {rooms.length === 0 ? (
//         <p>Tidak ada ruangan.</p>
//       ) : (
//         <ul>
//           {rooms.map(room => (
//             <li key={room.id} className="border rounded p-3 mb-2">
//               <h3 className="font-bold">{room.name}</h3>
//               <p>Status: {room.status}</p>
//               {/* Contoh lain: tampilkan sensor suhu jika ada */}
//               {room.temperature !== undefined && (
//                 <p>Suhu: {room.temperature} °C</p>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserRooms;
import React, { useEffect, useState } from "react";
import SidebarUser from "../../components/SidebarUser";
import { dbFirestore } from "../../firebase/Config";
import { collection, onSnapshot } from "firebase/firestore";

const RoomsUser = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Pasang listener realtime ke koleksi "rooms"
    const unsubscribe = onSnapshot(collection(dbFirestore, "rooms"), (snapshot) => {
      const roomList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(roomList);
    });

    // Cleanup function supaya listener dibersihkan saat komponen unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex">
      <SidebarUser />
      <div className="ml-64 p-6 w-full bg-gray-900 text-white min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Daftar Ruangan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-gray-700 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p
                className={`text-sm mt-2 ${
                  room.status === "available" ? "text-green-400" : "text-yellow-300"
                }`}
              >
                {room.status === "available" ? "Tersedia" : "Dalam Perbaikan"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsUser;
