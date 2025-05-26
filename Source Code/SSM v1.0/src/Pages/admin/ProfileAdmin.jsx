import React, { useEffect, useState } from "react";
import SidebarUser from "../../components/SidebarAdmin"; // Ganti sesuai role (SidebarAdmin jika admin)

const Profile = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Ambil data user dari localStorage atau API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setEmail(storedUser.email);
      setRole(storedUser.role);
      setName(storedUser.name || "");
    }
  }, []);

  const handleUpdate = () => {
    // Kirim data ke backend / simpan local
    alert("Profil diperbarui!");
    // TODO: Tambahkan logic penyimpanan
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SidebarUser />
      <div className="ml-64 p-6">
        <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>

        <div className="bg-gray-800 p-6 rounded-xl shadow max-w-xl">
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Role</label>
            <input
              type="text"
              value={role}
              readOnly
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-400">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-gray-400">Password Baru</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Kosongkan jika tidak ingin ganti"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
