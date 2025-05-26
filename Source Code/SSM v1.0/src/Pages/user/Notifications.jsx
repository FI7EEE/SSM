// // import React, { useEffect, useState } from "react";
// // import { collection, query, where, onSnapshot } from "firebase/firestore";
// // import { dbFirestore } from "../../firebase/Config";
// // import { getAuth } from "firebase/auth";

// // const formatDate = (date) => {
// //   if (!date) return "";
// //   if (typeof date.toDate === "function") return date.toDate().toLocaleDateString();
// //   return new Date(date).toLocaleDateString();
// // };

// // const Notifications = () => {
// //   const [notifications, setNotifications] = useState([]);
// //   const [userId, setUserId] = useState(null);
// //   const [loadingUser, setLoadingUser] = useState(true);

// //   useEffect(() => {
// //     const auth = getAuth();
// //     const unsubscribeAuth = auth.onAuthStateChanged((user) => {
// //       if (user) setUserId(user.uid);
// //       else setUserId(null);
// //       setLoadingUser(false);
// //     });
// //     return () => unsubscribeAuth();
// //   }, []);

// //   useEffect(() => {
// //     if (!userId) return;

// //     const q = query(
// //       collection(dbFirestore, "reservations"),
// //       where("userId", "==", userId),
// //       where("status", "==", "accepted")
// //     );

// //     const unsubscribe = onSnapshot(q, (snapshot) => {
// //       const notifData = snapshot.docs.map(doc => ({
// //         id: doc.id,
// //         ...doc.data(),
// //       }));
// //       setNotifications(notifData);
// //     });

// //     return () => unsubscribe();
// //   }, [userId]);

// //   if (loadingUser) return <p>Loading user data...</p>;
// //   if (!userId) return <p>Harap login terlebih dahulu.</p>;

// //   return (
// //     <div className="p-6 bg-gray-800 text-white min-h-screen">
// //       <h2 className="text-2xl font-bold mb-6">Notifikasi</h2>
// //       {notifications.length === 0 ? (
// //         <p>Tidak ada notifikasi.</p>
// //       ) : (
// //         notifications.map((notif) => (
// //           <div key={notif.id} className="bg-gray-700 p-4 rounded mb-4">
// //             <p>
// //               Pesanan ruangan <strong>{notif.ruangan}</strong> kamu pada tanggal{" "}
// //               <strong>{formatDate(notif.tanggal)}</strong> jam{" "}
// //               <strong>{notif.jam}</strong> telah{" "}
// //               <span className="text-green-400">diterima</span>.
// //             </p>
// //             <p className="mt-2 font-mono text-sm bg-gray-900 p-2 rounded">
// //               Struk: {notif.id}
// //             </p>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default Notifications;
// import React, { useEffect, useState } from "react";
// import { collection, query, where, onSnapshot } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";
// import { getAuth } from "firebase/auth";

// const formatDate = (date) => {
//   if (!date) return "";
//   if (typeof date.toDate === "function") return date.toDate().toLocaleDateString();
//   return new Date(date).toLocaleDateString();
// };

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [userId, setUserId] = useState(null);
//   const [loadingUser, setLoadingUser] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribeAuth = auth.onAuthStateChanged((user) => {
//       if (user) setUserId(user.uid);
//       else setUserId(null);
//       setLoadingUser(false);
//     });
//     return () => unsubscribeAuth();
//   }, []);

//   useEffect(() => {
//     if (!userId) return;

//     const q = query(
//       collection(dbFirestore, "reservations"),
//       where("userId", "==", userId),
//       where("status", "==", "accepted")
//     );

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const notifData = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setNotifications(notifData);
//     });

//     return () => unsubscribe();
//   }, [userId]);

//   if (loadingUser) return <p>Loading user data...</p>;
//   if (!userId) return <p>Harap login terlebih dahulu.</p>;

//   return (
//     <div className="p-6 bg-gray-800 text-white min-h-screen">
//       <h2 className="text-2xl font-bold mb-6">Notifikasi</h2>
//       {notifications.length === 0 ? (
//         <p>Tidak ada notifikasi.</p>
//       ) : (
//         notifications.map((notif) => (
//           <div key={notif.id} className="bg-gray-700 p-4 rounded mb-4">
//             <p>
//               Pesanan ruangan <strong>{notif.ruangan}</strong> kamu pada tanggal{" "}
//               <strong>{formatDate(notif.tanggal)}</strong> jam{" "}
//               <strong>{notif.jam}</strong> telah{" "}
//               <span className="text-green-400">diterima</span>.
//             </p>
//             <p className="mt-2 font-mono text-sm bg-gray-900 p-2 rounded">
//               Struk: {notif.id}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Notifications;
// import React, { useEffect, useState } from "react";
// import { collection, query, where, onSnapshot } from "firebase/firestore";
// import { dbFirestore } from "../../firebase/Config";
// import SidebarUser from "../../components/SidebarUser";
// import { getAuth } from "firebase/auth";

// const formatDate = (date) => {
//   if (!date) return "";
//   if (typeof date.toDate === "function") return date.toDate().toLocaleDateString();
//   return new Date(date).toLocaleDateString();
// };

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [userId, setUserId] = useState(null);
//   const [loadingUser, setLoadingUser] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribeAuth = auth.onAuthStateChanged((user) => {
//       if (user) setUserId(user.uid);
//       else setUserId(null);
//       setLoadingUser(false);
//     });
//     return () => unsubscribeAuth();
//   }, []);

//   useEffect(() => {
//     if (!userId) return;

//     const q = query(
//       collection(dbFirestore, "reservations"),
//       where("userId", "==", userId),
//       where("status", "==", "accepted")
//     );

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const notifData = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setNotifications(notifData);
//     });

//     return () => unsubscribe();
//   }, [userId]);

//   if (loadingUser) return <p>Loading user data...</p>;
//   if (!userId) return <p>Harap login terlebih dahulu.</p>;

//   return (
//     <div className="flex">
//       <SidebarUser />
//       <div className="ml-64 p-6 w-full bg-gray-800 text-white min-h-screen">
//       <h2 className="text-2xl font-bold mb-6">Notifikasi</h2>
//       {notifications.length === 0 ? (
//         <p>Tidak ada notifikasi.</p>
//       ) : (
//         notifications.map((notif) => (
//           <div key={notif.id} className="bg-gray-700 p-4 rounded mb-4">
//             <p>
//               Pesanan ruangan <strong>{notif.ruangan}</strong> kamu pada tanggal{" "}
//               <strong>{formatDate(notif.tanggal)}</strong> jam{" "}
//               <strong>{notif.jam}</strong> telah{" "}
//               <span className="text-green-400">diterima</span>.
//             </p>
//             <p className="mt-2 font-mono text-sm bg-gray-900 p-2 rounded whitespace-pre-line">
//               {`Struk Pemesanan:
// Nama: ${notif.nama}
// Ruangan: ${notif.ruangan}
// Tanggal: ${formatDate(notif.tanggal)}
// Jam: ${notif.jam}
// Status: ${notif.status}`}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//     </div>
//   );
// };

// export default Notifications;

import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { dbFirestore } from "../../firebase/Config";
import SidebarUser from "../../components/SidebarUser";
import { getAuth } from "firebase/auth";

const formatDate = (date) => {
  if (!date) return "";
  if (typeof date.toDate === "function") return date.toDate().toLocaleDateString();
  return new Date(date).toLocaleDateString();
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) setUserId(user.uid);
      else setUserId(null);
      setLoadingUser(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(dbFirestore, "reservations"),
      where("userId", "==", userId),
      where("status", "in", ["accepted", "rejected"])
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notifData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(notifData);
    });

    return () => unsubscribe();
  }, [userId]);

  if (loadingUser) return <p>Loading user data...</p>;
  if (!userId) return <p>Harap login terlebih dahulu.</p>;

  return (
    <div className="flex">
      <SidebarUser />
      <div className="ml-64 p-6 w-full bg-gray-900 text-white min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Notifikasi</h2>
        {notifications.length === 0 ? (
          <p>Tidak ada notifikasi.</p>
        ) : (
          notifications.map((notif) => (
            <div key={notif.id} className="bg-gray-700 p-4 rounded mb-4">
              {notif.status === "accepted" ? (
                <>
                  <p>
                    Pesanan ruangan <strong>{notif.ruangan}</strong> kamu pada tanggal{" "}
                    <strong>{formatDate(notif.tanggal)}</strong> jam{" "}
                    <strong>{notif.jam}</strong> telah{" "}
                    <span className="text-green-400">diterima</span>.
                  </p>
                  <p className="mt-2 font-mono text-sm bg-gray-900 p-2 rounded whitespace-pre-line">
                    {`Struk Pemesanan:
Nama: ${notif.nama}
Ruangan: ${notif.ruangan}
Tanggal: ${formatDate(notif.tanggal)}
Jam: ${notif.jam}
Status: ${notif.status}`}
                  </p>
                </>
              ) : notif.status === "rejected" ? (
                <>
                  <p>
                    Pesanan ruangan <strong>{notif.ruangan}</strong> kamu pada tanggal{" "}
                    <strong>{formatDate(notif.tanggal)}</strong> jam{" "}
                    <strong>{notif.jam}</strong> telah{" "}
                    <span className="text-red-400">dibatalkan</span>.
                  </p>
                  <p className="mt-2 font-mono text-sm bg-gray-900 p-2 rounded whitespace-pre-line">
                    {`Detail Pembatalan:
Nama: ${notif.nama}
Ruangan: ${notif.ruangan}
Tanggal: ${formatDate(notif.tanggal)}
Jam: ${notif.jam}
Status: ${notif.status}`}
                  </p>
                </>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
