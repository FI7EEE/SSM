// // src/pages/admin/ManageOrders.jsx
// import React, { useEffect, useState } from "react";
// import SidebarAdmin from "../../components/SidebarAdmin";
// import { collection, onSnapshot, updateDoc, doc, Timestamp } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";

// const formatDate = (timestamp) => {
//   if (!timestamp) return "";
//   if (timestamp instanceof Timestamp) {
//     return timestamp.toDate().toLocaleDateString();
//   }
//   return timestamp;
// };

// const ManageOrders = () => {
//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     // Listen realtime koleksi "reservations"
//     const unsubscribe = onSnapshot(collection(dbFirestore, "reservations"), (snapshot) => {
//       const data = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       // Urutkan berdasarkan createdAt terbaru di atas
//       data.sort((a,b) => b.createdAt?.seconds - a.createdAt?.seconds);
//       setReservations(data);
//     });

//     return () => unsubscribe();
//   }, []);

//   const updateStatus = async (id, newStatus) => {
//     try {
//       await updateDoc(doc(dbFirestore, "reservations", id), { status: newStatus });
//     } catch (error) {
//       alert("Gagal update status: " + error.message);
//     }
//   };

//   return (
//     <div className="flex">
//       <SidebarAdmin />
//       <div className="ml-64 p-6 w-full bg-gray-800 text-white min-h-screen">
//         <h2 className="text-2xl font-bold mb-6">Kelola Pesanan</h2>
//         {reservations.length === 0 ? (
//           <p>Belum ada pesanan.</p>
//         ) : (
//           <div className="space-y-4">
//             {reservations.map((res) => (
//               <div
//                 key={res.id}
//                 className="bg-gray-700 p-4 rounded flex flex-col md:flex-row md:justify-between md:items-center"
//               >
//                 <div>
//                   <p><strong>Nama:</strong> {res.nama}</p>
//                   <p><strong>Ruangan:</strong> {res.ruangan}</p>
//                   <p><strong>Tanggal:</strong> {formatDate(res.tanggal)}</p>
//                   <p><strong>Jam:</strong> {res.jam}</p>
//                   <p><strong>Status:</strong> <span className={`font-semibold ${
//                     res.status === "accepted" ? "text-green-400" :
//                     res.status === "rejected" ? "text-red-400" :
//                     res.status === "completed" ? "text-blue-400" : "text-yellow-400"
//                   }`}>{res.status}</span></p>
//                 </div>
//                 <div className="mt-4 md:mt-0 space-x-2">
//                   <button
//                     onClick={() => updateStatus(res.id, "accepted")}
//                     disabled={res.status === "accepted" || res.status === "completed"}
//                     className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
//                   >
//                     Terima
//                   </button>
//                   <button
//                     onClick={() => updateStatus(res.id, "rejected")}
//                     disabled={res.status === "rejected" || res.status === "completed"}
//                     className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
//                   >
//                     Tolak
//                   </button>
//                   <button
//                     onClick={() => updateStatus(res.id, "completed")}
//                     disabled={res.status !== "accepted"}
//                     className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//                   >
//                     Selesai
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// src/pages/admin/ManageOrders.jsx
// 
import React, { useEffect, useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";
import {
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { dbFirestore } from "../../firebase/Config";

const formatDate = (timestamp) => {
  if (!timestamp) return "";
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate().toLocaleDateString();
  }
  return timestamp;
};

const ManageOrders = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(dbFirestore, "reservations"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      data.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setReservations(data);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(dbFirestore, "reservations", id), {
        status: newStatus,
      });

      if (newStatus === "completed") {
        const res = reservations.find((r) => r.id === id);
        if (res) {
          await addDoc(collection(dbFirestore, "customers"), {
            nama: res.nama,
            ruangan: res.ruangan,
            tanggal: res.tanggal,
            jam: res.jam,
            status: "Selesai",
            createdAt: new Date(),
          });
          console.log("Customer ditambahkan:", res.nama);
        }
      }
    } catch (error) {
      alert("Gagal update status atau menambahkan customer: " + error.message);
    }
  };

  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus riwayat pesanan ini?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(dbFirestore, "reservations", id));
    } catch (error) {
      alert("Gagal menghapus pesanan: " + error.message);
    }
  };

  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="ml-64 p-6 w-full bg-gray-900 text-white min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Kelola Pesanan</h2>
        {reservations.length === 0 ? (
          <p>Belum ada pesanan.</p>
        ) : (
          <div className="space-y-4">
            {reservations.map((res) => (
              <div
                key={res.id}
                className="bg-gray-700 p-4 rounded flex flex-col md:flex-row md:justify-between md:items-center"
              >
                <div>
                  <p><strong>Nama:</strong> {res.nama}</p>
                  <p><strong>Ruangan:</strong> {res.ruangan}</p>
                  <p><strong>Tanggal:</strong> {formatDate(res.tanggal)}</p>
                  <p><strong>Jam:</strong> {res.jam}</p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`font-semibold ${
                        res.status === "accepted"
                          ? "text-green-400"
                          : res.status === "rejected"
                          ? "text-red-400"
                          : res.status === "completed"
                          ? "text-blue-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {res.status}
                    </span>
                  </p>
                </div>
                <div className="mt-4 md:mt-0 space-x-2 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => updateStatus(res.id, "accepted")}
                    disabled={
                      res.status === "accepted" ||
                      res.status === "completed" ||
                      res.status === "rejected"
                    }
                    className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                  >
                    Terima
                  </button>
                  <button
                    onClick={() => updateStatus(res.id, "rejected")}
                    disabled={res.status === "rejected" || res.status === "completed"}
                    className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    Tolak
                  </button>
                  <button
                    onClick={() => updateStatus(res.id, "completed")}
                    disabled={res.status !== "accepted"}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                  >
                    Selesai
                  </button>
                  {(res.status === "completed" || res.status === "rejected") && (
                    <button
                      onClick={() => deleteOrder(res.id)}
                      className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                    >
                      Hapus Riwayat
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageOrders;

