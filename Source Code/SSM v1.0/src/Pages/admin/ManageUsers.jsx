// // // src/pages/admin/ManageUsers.jsx
// // import React, { useEffect, useState } from "react";
// // import { collection, getDocs } from "firebase/firestore";
// // import { dbFirestore } from "../../firebase/Config";

// // export default function ManageUsers() {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     async function fetchUsers() {
// //       try {
// //         const usersCol = collection(dbFirestore, "users");  // collection Firestore "users"
// //         const userSnapshot = await getDocs(usersCol);
// //         const userList = userSnapshot.docs.map(doc => ({
// //           id: doc.id,
// //           ...doc.data()
// //         }));
// //         setUsers(userList);
// //       } catch (error) {
// //         console.error("Error fetching users:", error);
// //       }
// //     }

// //     fetchUsers();
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
// //       <table className="w-full text-left border-collapse">
// //         <thead>
// //           <tr className="border-b border-gray-600">
// //             <th className="py-2 px-4">Nama</th>
// //             <th className="py-2 px-4">Email</th>
// //             <th className="py-2 px-4">Role</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.length === 0 ? (
// //             <tr><td colSpan="3" className="py-4 text-center">Loading users...</td></tr>
// //           ) : (
// //             users.map(user => (
// //               <tr key={user.id} className="border-b border-gray-700">
// //                 <td className="py-2 px-4">{user.nama || "-"}</td>
// //                 <td className="py-2 px-4">{user.email || "-"}</td>
// //                 <td className="py-2 px-4">{user.role || "-"}</td>
// //               </tr>
// //             ))
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import SidebarAdmin from "../../components/SidebarAdmin";
// import { collection, getDocs } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(dbFirestore, "users"));
//         const userList = [];
//         querySnapshot.forEach((doc) => {
//           userList.push({ id: doc.id, ...doc.data() });
//         });
//         setUsers(userList);
//       } catch (error) {
//         console.error("Gagal mengambil data user:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="flex">
//       <SidebarAdmin />
//       <div className="flex-1 p-6 bg-gray-800 text-white">
//         <h1 className="text-2xl font-bold mb-4">Kelola User</h1>

//         {loading ? (
//           <p>Memuat data user...</p>
//         ) : users.length === 0 ? (
//           <p>Tidak ada data user.</p>
//         ) : (
//           <table className="min-w-full border border-gray-600 text-sm">
//             <thead className="bg-gray-700 text-gray-300">
//               <tr>
//                 <th className="px-4 py-2 border">UID</th>
//                 <th className="px-4 py-2 border">Email</th>
//                 <th className="px-4 py-2 border">Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id} className="text-center border-t border-gray-700 hover:bg-gray-700/40">
//                   <td className="px-4 py-2 border">{user.id}</td>
//                   <td className="px-4 py-2 border">{user.email}</td>
//                   <td className="px-4 py-2 border">{user.role}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";
import { dbFirestore } from "../../firebase/Config";
import SidebarAdmin from "../../components/SidebarAdmin";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(dbFirestore, "users"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await deleteDoc(doc(dbFirestore, "users", id));
    fetchUsers();
  };

  const updateRole = async (id, newRole) => {
    await updateDoc(doc(dbFirestore, "users", id), { role: newRole });
    fetchUsers();
  };

  const addUser = async () => {
    if (!email || !password) return alert("Email dan Password wajib diisi!");
    await addDoc(collection(dbFirestore, "users"), { email, role });
    setEmail("");
    setPassword("");
    setRole("user");
    fetchUsers();
  };
return (
  <div className="min-h-screen bg-gray-900 text-white">
    <SidebarAdmin />

    {/* Konten utama digeser ke kanan sejauh 64 (sidebar width) */}
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-6">Kelola Pengguna</h1>

      {/* Form Tambah User */}
      <div className="bg-gray-800 p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Tambah Pengguna Baru</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white w-full sm:w-1/4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white w-full sm:w-1/4"
          />
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white w-full sm:w-1/6"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            onClick={addUser}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Tambah
          </button>
        </div>
      </div>

      {/* Daftar Pengguna */}
      <div className="bg-gray-800 p-4 rounded-xl shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Daftar Pengguna</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t border-gray-700">
                <td className="py-2">{user.email}</td>
                <td className="py-2 capitalize">{user.role}</td>
                <td className="py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        updateRole(user.id, user.role === "admin" ? "user" : "admin")
                      }
                      className="bg-yellow-600 px-3 py-1 rounded hover:bg-yellow-700"
                    >
                      Ubah Role
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

//   return (
//     <div className="flex">
//       <SidebarAdmin />
//       <div className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
//         <h1 className="text-2xl font-bold mb-6">Kelola Pengguna</h1>

//         {/* Form Tambah User */}
//         <div className="bg-gray-800 p-4 rounded-xl shadow mb-6">
//           <h2 className="text-lg font-semibold mb-4">Tambah Pengguna Baru</h2>
//           <div className="flex gap-4 mb-4">
//             <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
//               className="p-2 rounded bg-gray-700 text-white w-1/3" />
//             <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
//               className="p-2 rounded bg-gray-700 text-white w-1/3" />
//             <select value={role} onChange={e => setRole(e.target.value)} className="p-2 rounded bg-gray-700 text-white">
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//             <button onClick={addUser} className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
//               Tambah
//             </button>
//           </div>
//         </div>

//         {/* Daftar Pengguna */}
//         <div className="bg-gray-800 p-4 rounded-xl shadow">
//           <h2 className="text-lg font-semibold mb-4">Daftar Pengguna</h2>
//           <table className="w-full text-left">
//             <thead>
//               <tr className="text-gray-400">
//                 <th className="py-2">Email</th>
//                 <th className="py-2">Role</th>
//                 <th className="py-2">Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id} className="border-t border-gray-700">
//                   <td className="py-2">{user.email}</td>
//                   <td className="py-2 capitalize">{user.role}</td>
//                   <td className="py-2 flex gap-2">
//                     <button onClick={() => updateRole(user.id, user.role === "admin" ? "user" : "admin")}
//                       className="bg-yellow-600 px-3 py-1 rounded hover:bg-yellow-700">
//                       Ubah Role
//                     </button>
//                     <button onClick={() => deleteUser(user.id)}
//                       className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">
//                       Hapus
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
};
export default ManageUsers;
