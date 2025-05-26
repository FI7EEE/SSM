// import React, { useState, useEffect } from "react";
// import { collection, addDoc, Timestamp, onSnapshot } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";

// const generateTimeOptions = (startHour, endHour) => {
//   const options = [];
//   for (let h = startHour; h <= endHour; h++) {
//     const hourStr = h.toString().padStart(2, "0") + ":00";
//     options.push(hourStr);
//   }
//   return options;
// };

// const RoomReservation = () => {
//   const [nama, setNama] = useState("");
//   const [ruangan, setRuangan] = useState("");
//   const [tanggal, setTanggal] = useState("");
//   const [jamMulai, setJamMulai] = useState("");
//   const [jamSelesai, setJamSelesai] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Semua jam dari 08:00 sampai 22:00
//   const allTimeOptions = generateTimeOptions(8, 22);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(dbFirestore, "rooms"), (snapshot) => {
//       const dataRooms = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setRooms(dataRooms);
//       if (dataRooms.length > 0 && !ruangan) {
//         setRuangan(dataRooms[0].name);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // Jam selesai harus minimal 1 jam setelah jam mulai, maksimal 22:00
//   const jamSelesaiOptions = jamMulai
//     ? allTimeOptions.filter(time => {
//         const mulaiHour = parseInt(jamMulai.split(":")[0], 10);
//         const selesaiHour = parseInt(time.split(":")[0], 10);
//         return selesaiHour > mulaiHour; // minimal 1 jam lebih
//       })
//     : allTimeOptions.slice(1); // Jika jamMulai belum dipilih, tampilkan jam mulai dari 09:00 ke atas untuk jam selesai

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!nama || !ruangan || !tanggal || !jamMulai || !jamSelesai) {
//       setMessage("Semua field wajib diisi");
//       return;
//     }

//     // Validasi jam selesai harus lebih besar dari jam mulai
//     const mulaiHour = parseInt(jamMulai.split(":")[0], 10);
//     const selesaiHour = parseInt(jamSelesai.split(":")[0], 10);
//     if (selesaiHour <= mulaiHour) {
//       setMessage("Jam selesai harus lebih besar dari jam mulai minimal 1 jam");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const tanggalTimestamp = Timestamp.fromDate(new Date(tanggal));
//       const jamRange = `${jamMulai}-${jamSelesai}`;
//       await addDoc(collection(dbFirestore, "reservations"), {
//         nama,
//         ruangan,
//         tanggal: tanggalTimestamp,
//         jam: jamRange,
//         status: "pending",
//         createdAt: Timestamp.now(),
//       });

//       setMessage("Reservasi berhasil dikirim!");
//       setNama("");
//       setJamMulai("");
//       setJamSelesai("");
//       setTanggal("");
//     } catch (error) {
//       setMessage("Gagal mengirim reservasi: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-800 text-white min-h-screen max-w-md mx-auto">
//       <h2 className="text-2xl mb-6 font-bold">Buat Reservasi Ruangan</h2>
//       {message && <p className="mb-4">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Nama"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           className="w-full p-2 rounded text-black"
//           required
//         />
//         <select
//           value={ruangan}
//           onChange={(e) => setRuangan(e.target.value)}
//           className="w-full p-2 rounded text-black"
//           required
//         >
//           {rooms.length === 0 ? (
//             <option disabled>Loading rooms...</option>
//           ) : (
//             rooms.map(room => (
//               <option key={room.id} value={room.name}>{room.name}</option>
//             ))
//           )}
//         </select>
//         <input
//           type="date"
//           value={tanggal}
//           onChange={(e) => setTanggal(e.target.value)}
//           className="w-full p-2 rounded text-black"
//           required
//         />
//         <label>
//           Jam Mulai:
//           <select
//             value={jamMulai}
//             onChange={(e) => {
//               setJamMulai(e.target.value);
//               setJamSelesai(""); // reset jam selesai saat jam mulai berubah
//             }}
//             className="w-full p-2 rounded text-black"
//             required
//           >
//             <option value="">Pilih jam mulai</option>
//             {allTimeOptions.slice(0, allTimeOptions.length - 1).map(time => (
//               <option key={time} value={time}>{time}</option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Jam Selesai:
//           <select
//             value={jamSelesai}
//             onChange={(e) => setJamSelesai(e.target.value)}
//             className="w-full p-2 rounded text-black"
//             required
//             disabled={!jamMulai}
//           >
//             <option value="">Pilih jam selesai</option>
//             {jamSelesaiOptions.map(time => (
//               <option key={time} value={time}>{time}</option>
//             ))}
//           </select>
//         </label>
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-green-600 w-full py-2 rounded hover:bg-green-700 disabled:opacity-50"
//         >
//           {loading ? "Mengirim..." : "Kirim Reservasi"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RoomReservation;



/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { collection, addDoc, Timestamp, onSnapshot } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";
// import { getAuth } from "firebase/auth"; // Import auth
// import SidebarUser from "../../components/SidebarUser";

// const generateTimeOptions = (startHour, endHour) => {
//   const options = [];
//   for (let h = startHour; h <= endHour; h++) {
//     const hourStr = h.toString().padStart(2, "0") + ":00";
//     options.push(hourStr);
//   }
//   return options;
// };

// const RoomReservation = () => {
//   const auth = getAuth(); // Inisialisasi auth
//   const [nama, setNama] = useState("");
//   const [ruangan, setRuangan] = useState("");
//   const [tanggal, setTanggal] = useState("");
//   const [jamMulai, setJamMulai] = useState("");
//   const [jamSelesai, setJamSelesai] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Semua jam dari 08:00 sampai 22:00
//   const allTimeOptions = generateTimeOptions(8, 22);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(dbFirestore, "rooms"), (snapshot) => {
//       const dataRooms = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setRooms(dataRooms);
//       if (dataRooms.length > 0 && !ruangan) {
//         setRuangan(dataRooms[0].name);
//       }
//     });

//     return () => unsubscribe();
//   }, [ruangan]);

//   // Jam selesai harus minimal 1 jam setelah jam mulai, maksimal 22:00
//   const jamSelesaiOptions = jamMulai
//     ? allTimeOptions.filter(time => {
//         const mulaiHour = parseInt(jamMulai.split(":")[0], 10);
//         const selesaiHour = parseInt(time.split(":")[0], 10);
//         return selesaiHour > mulaiHour; // minimal 1 jam lebih
//       })
//     : allTimeOptions.slice(1); // Jika jamMulai belum dipilih, tampilkan jam mulai dari 09:00 ke atas untuk jam selesai

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!auth.currentUser) {
//       setMessage("Kamu harus login terlebih dahulu.");
//       return;
//     }

//     if (!nama || !ruangan || !tanggal || !jamMulai || !jamSelesai) {
//       setMessage("Semua field wajib diisi");
//       return;
//     }

//     // Validasi jam selesai harus lebih besar dari jam mulai
//     const mulaiHour = parseInt(jamMulai.split(":")[0], 10);
//     const selesaiHour = parseInt(jamSelesai.split(":")[0], 10);
//     if (selesaiHour <= mulaiHour) {
//       setMessage("Jam selesai harus lebih besar dari jam mulai minimal 1 jam");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const tanggalTimestamp = Timestamp.fromDate(new Date(tanggal));
//       const jamRange = `${jamMulai}-${jamSelesai}`;
//       await addDoc(collection(dbFirestore, "reservations"), {
//         nama,
//         ruangan,
//         tanggal: tanggalTimestamp,
//         jam: jamRange,
//         status: "pending",
//         createdAt: Timestamp.now(),
//         userId: auth.currentUser.uid, // << TAMBAHKAN userId di sini
//       });

//       setMessage("Reservasi berhasil dikirim!");
//       setNama("");
//       setJamMulai("");
//       setJamSelesai("");
//       setTanggal("");
//     } catch (error) {
//       setMessage("Gagal mengirim reservasi: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex">
//       <SidebarUser />
//     <div className="ml-64 p-6 w-full bg-gray-800 text-white min-h-screenl">
//       <h2 className="text-2xl mb-6 font-bold">Buat Reservasi Ruangan</h2>
//       {message && <p className="mb-4">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Nama"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           className="w-full p-2 rounded text-black"
//           required
//         />
//         <select
//           value={ruangan}
//           onChange={(e) => setRuangan(e.target.value)}
//           className="w-full p-2 rounded text-black"
//           required
//         >
//           {rooms.length === 0 ? (
//             <option disabled>Loading rooms...</option>
//           ) : (
//             rooms.map(room => (
//               <option key={room.id} value={room.name}>{room.name}</option>
//             ))
//           )}
//         </select>
//         <input
//           type="date"
//           value={tanggal}
//           onChange={(e) => setTanggal(e.target.value)}
//           className="w-full p-2 rounded text-black"
//           required
//         />
//         <label>
//           Jam Mulai:
//           <select
//             value={jamMulai}
//             onChange={(e) => {
//               setJamMulai(e.target.value);
//               setJamSelesai(""); // reset jam selesai saat jam mulai berubah
//             }}
//             className="w-full p-2 rounded text-black"
//             required
//           >
//             <option value="">Pilih jam mulai</option>
//             {allTimeOptions.slice(0, allTimeOptions.length - 1).map(time => (
//               <option key={time} value={time}>{time}</option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Jam Selesai:
//           <select
//             value={jamSelesai}
//             onChange={(e) => setJamSelesai(e.target.value)}
//             className="w-full p-2 rounded text-black"
//             required
//             disabled={!jamMulai}
//           >
//             <option value="">Pilih jam selesai</option>
//             {jamSelesaiOptions.map(time => (
//               <option key={time} value={time}>{time}</option>
//             ))}
//           </select>
//         </label>
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-green-600 w-full py-2 rounded hover:bg-green-700 disabled:opacity-50"
//         >
//           {loading ? "Mengirim..." : "Kirim Reservasi"}
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default RoomReservation;


////////////////////////////////////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import SidebarUser from "../../components/SidebarUser";

// const RoomReservation = () => {
//   const [nama, setNama] = useState("");
//   const [ruangan, setRuangan] = useState("");
//   const [tanggal, setTanggal] = useState("");
//   const [jamMulai, setJamMulai] = useState("");
//   const [jamSelesai, setJamSelesai] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const allTimeOptions = [
//     "07:00", "08:00", "09:00", "10:00", "11:00",
//     "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
//   ];

//   const jamSelesaiOptions = allTimeOptions.filter(time => time > jamMulai);

//   useEffect(() => {
//     // Simulasi ambil data ruangan
//     setRooms([{ id: 1, name: "A201" }, { id: 2, name: "A202" }]);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setMessage("Reservasi berhasil dikirim!");
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="flex bg-gray-900 min-h-screen text-white">
//       {/* Sidebar fixed */}
//       <SidebarUser />

//       {/* Konten geser ke kanan setelah sidebar */}
//       <main className="ml-64 flex-1 p-6 bg-gray-800 min-h-screen">
//         <h2 className="text-2xl mb-6 font-bold">Buat Reservasi Ruangan</h2>

//         {message && (
//           <p className="mb-4 text-sm bg-gray-700 p-2 rounded">{message}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
//           <input
//             type="text"
//             placeholder="Nama"
//             value={nama}
//             onChange={(e) => setNama(e.target.value)}
//             className="w-full p-2 rounded text-black"
//             required
//           />

//           <select
//             value={ruangan}
//             onChange={(e) => setRuangan(e.target.value)}
//             className="w-full p-2 rounded text-black"
//             required
//           >
//             <option value="">Pilih ruangan</option>
//             {rooms.map((room) => (
//               <option key={room.id} value={room.name}>{room.name}</option>
//             ))}
//           </select>

//           <input
//             type="date"
//             value={tanggal}
//             onChange={(e) => setTanggal(e.target.value)}
//             className="w-full p-2 rounded text-black"
//             required
//           />

//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block mb-1">Jam Mulai:</label>
//               <select
//                 value={jamMulai}
//                 onChange={(e) => {
//                   setJamMulai(e.target.value);
//                   setJamSelesai("");
//                 }}
//                 className="w-full p-2 rounded text-black"
//                 required
//               >
//                 <option value="">Pilih jam mulai</option>
//                 {allTimeOptions.slice(0, allTimeOptions.length - 1).map((time) => (
//                   <option key={time} value={time}>{time}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex-1">
//               <label className="block mb-1">Jam Selesai:</label>
//               <select
//                 value={jamSelesai}
//                 onChange={(e) => setJamSelesai(e.target.value)}
//                 className="w-full p-2 rounded text-black"
//                 required
//                 disabled={!jamMulai}
//               >
//                 <option value="">Pilih jam selesai</option>
//                 {jamSelesaiOptions.map((time) => (
//                   <option key={time} value={time}>{time}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-green-600 w-full py-2 rounded hover:bg-green-700 disabled:opacity-50"
//           >
//             {loading ? "Mengirim..." : "Kirim Reservasi"}
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default RoomReservation;

import React, { useState, useEffect } from "react";
import { collection, addDoc, Timestamp, onSnapshot } from "firebase/firestore";
import { dbFirestore } from "../../firebase/Config";
import { getAuth } from "firebase/auth";
import SidebarUser from "../../components/SidebarUser";

const generateTimeOptions = (startHour, endHour) => {
  const options = [];
  for (let h = startHour; h <= endHour; h++) {
    options.push(h.toString().padStart(2, "0") + ":00");
  }
  return options;
};

const RoomReservation = () => {
  const auth = getAuth();
  const [nama, setNama] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jamMulai, setJamMulai] = useState("");
  const [jamSelesai, setJamSelesai] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const allTimeOptions = generateTimeOptions(8, 22);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(dbFirestore, "rooms"), (snapshot) => {
      const dataRooms = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(dataRooms);
      if (dataRooms.length > 0 && !ruangan) {
        setRuangan(dataRooms[0].name);
      }
    });

    return () => unsubscribe();
  }, [ruangan]);

  const jamSelesaiOptions = jamMulai
    ? allTimeOptions.filter(time => {
        const mulaiHour = parseInt(jamMulai.split(":")[0], 10);
        const selesaiHour = parseInt(time.split(":")[0], 10);
        return selesaiHour > mulaiHour;
      })
    : allTimeOptions.slice(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      setMessage("Kamu harus login terlebih dahulu.");
      return;
    }

    if (!nama || !ruangan || !tanggal || !jamMulai || !jamSelesai) {
      setMessage("Semua field wajib diisi");
      return;
    }

    const mulaiHour = parseInt(jamMulai.split(":")[0], 10);
    const selesaiHour = parseInt(jamSelesai.split(":")[0], 10);
    if (selesaiHour <= mulaiHour) {
      setMessage("Jam selesai harus lebih besar dari jam mulai minimal 1 jam");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const tanggalTimestamp = Timestamp.fromDate(new Date(tanggal));
      const jamRange = `${jamMulai}-${jamSelesai}`;
      await addDoc(collection(dbFirestore, "reservations"), {
        nama,
        ruangan,
        tanggal: tanggalTimestamp,
        jam: jamRange,
        status: "pending",
        createdAt: Timestamp.now(),
        userId: auth.currentUser.uid,
      });

      setMessage("Reservasi berhasil dikirim!");
      setNama("");
      setJamMulai("");
      setJamSelesai("");
      setTanggal("");
    } catch (error) {
      setMessage("Gagal mengirim reservasi: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      <SidebarUser />
      <div className="ml-64 p-8 w-full">
        <h2 className="text-3xl font-bold mb-8">Buat Reservasi Ruangan</h2>

        {message && (
          <div
            className={`mb-6 px-4 py-3 rounded text-sm font-medium ${
              message.toLowerCase().includes("berhasil")
                ? "bg-green-700 text-green-100"
                : "bg-red-700 text-red-100"
            }`}
          >
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-5"
        >
          <div>
            <label className="block mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-100 text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Pilih Ruangan</label>
            <select
              value={ruangan}
              onChange={(e) => setRuangan(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-100 text-black"
              required
            >
              {rooms.length === 0 ? (
                <option disabled>Loading rooms...</option>
              ) : (
                rooms.map(room => (
                  <option key={room.id} value={room.name}>{room.name}</option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="block mb-1">Tanggal</label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-100 text-black"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Jam Mulai</label>
              <select
                value={jamMulai}
                onChange={(e) => {
                  setJamMulai(e.target.value);
                  setJamSelesai("");
                }}
                className="w-full px-3 py-2 rounded bg-gray-100 text-black"
                required
              >
                <option value="">Pilih jam mulai</option>
                {allTimeOptions.slice(0, -1).map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1">Jam Selesai</label>
              <select
                value={jamSelesai}
                onChange={(e) => setJamSelesai(e.target.value)}
                className="w-full px-3 py-2 rounded bg-gray-100 text-black"
                required
                disabled={!jamMulai}
              >
                <option value="">Pilih jam selesai</option>
                {jamSelesaiOptions.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Reservasi"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomReservation;
