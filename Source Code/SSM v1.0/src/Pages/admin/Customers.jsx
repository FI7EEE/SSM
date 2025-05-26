// import React, { useEffect, useState } from "react";
// import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";
// import SidebarAdmin from "../../components/SidebarAdmin";

// const formatDate = (date) => {
//   if (!date) return "";
//   if (typeof date.toDate === "function") return date.toDate().toLocaleDateString();
//   return new Date(date).toLocaleDateString();
// };

// const Customers = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const q = query(collection(dbFirestore, "customers"), orderBy("createdAt", "desc"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setCustomers(data);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="flex">
//       <SidebarAdmin />
//       <div className="ml-64 p-6 w-full bg-gray-900 text-white min-h-screen">
//         <h2 className="text-2xl font-bold mb-6">Data Customers</h2>
//         {customers.length === 0 ? (
//           <p>Tidak ada data customer.</p>
//         ) : (
//           <table className="min-w-full text-left border border-gray-700 bg-gray-800 rounded-lg overflow-hidden">
//             <thead>
//               <tr className="bg-gray-700 text-gray-300">
//                 <th className="py-2 px-4 border-b border-gray-600">Nama</th>
//                 <th className="py-2 px-4 border-b border-gray-600">Ruangan</th>
//                 <th className="py-2 px-4 border-b border-gray-600">Tanggal</th>
//                 <th className="py-2 px-4 border-b border-gray-600">Jam</th>
//                 <th className="py-2 px-4 border-b border-gray-600">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customers.map((cust) => (
//                 <tr key={cust.id} className="hover:bg-gray-700">
//                   <td className="py-2 px-4 border-b border-gray-700">{cust.nama}</td>
//                   <td className="py-2 px-4 border-b border-gray-700">{cust.ruangan}</td>
//                   <td className="py-2 px-4 border-b border-gray-700">{formatDate(cust.tanggal)}</td>
//                   <td className="py-2 px-4 border-b border-gray-700">{cust.jam}</td>
//                   <td className="py-2 px-4 border-b border-gray-700 text-green-400">{cust.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Customers;
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { dbFirestore } from "../../firebase/Config";
import SidebarAdmin from "../../components/SidebarAdmin";

const formatDate = (date) => {
  if (!date) return "";
  if (typeof date.toDate === "function") return date.toDate().toLocaleDateString();
  if (typeof date === "string") return new Date(date).toLocaleDateString();
  return new Date(date).toLocaleDateString();
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(dbFirestore, "customers"),
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCustomers(data);
      },
      (error) => {
        console.error("Error fetching customers:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="ml-64 p-6 w-full bg-gray-900 text-white min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Daftar Customer</h2>
        {customers.length === 0 ? (
          <p>Belum ada customer.</p>
        ) : (
          <table className="table-auto w-full text-left bg-gray-900 rounded">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Ruangan</th>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Jam</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust) => (
                <tr key={cust.id} className="border-t border-gray-600">
                  <td className="px-4 py-2">{cust.nama}</td>
                  <td className="px-4 py-2">{cust.ruangan}</td>
                  <td className="px-4 py-2">{formatDate(cust.tanggal)}</td>
                  <td className="px-4 py-2">{cust.jam}</td>
                  <td className="px-4 py-2">{cust.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Customers;
