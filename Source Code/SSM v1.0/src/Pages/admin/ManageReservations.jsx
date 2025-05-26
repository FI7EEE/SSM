import React, { useEffect, useState } from "react";
import { dbFirestore } from "../../firebase/Config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

const ManageReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(dbFirestore, "reservations"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReservations(data);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    const docRef = doc(dbFirestore, "reservations", id);
    await updateDoc(docRef, { status });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Kelola Reservasi</h2>
      <table className="w-full table-auto border-collapse border border-gray-900">
        <thead>
          <tr>
            <th className="border border-gray-600 p-2">Ruangan</th>
            <th className="border border-gray-600 p-2">Tanggal</th>
            <th className="border border-gray-600 p-2">Status</th>
            <th className="border border-gray-600 p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id}>
              <td className="border border-gray-600 p-2">{res.room}</td>
              <td className="border border-gray-600 p-2">{res.date}</td>
              <td className="border border-gray-600 p-2">{res.status}</td>
              <td className="border border-gray-600 p-2 space-x-2">
                {res.status === "pending" && (
                  <>
                    <button
                      className="bg-green-600 px-3 py-1 rounded"
                      onClick={() => handleUpdateStatus(res.id, "approved")}
                    >
                      Setujui
                    </button>
                    <button
                      className="bg-red-600 px-3 py-1 rounded"
                      onClick={() => handleUpdateStatus(res.id, "rejected")}
                    >
                      Tolak
                    </button>
                  </>
                )}
                {(res.status === "approved" || res.status === "rejected") && (
                  <span>{res.status === "approved" ? "Disetujui" : "Ditolak"}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReservations;
