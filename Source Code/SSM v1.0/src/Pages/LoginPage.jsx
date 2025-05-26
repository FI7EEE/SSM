// // pages/LoginPage.jsx
// import React, { useState } from "react";
// import { loginUser } from "../firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/Config"; // pastikan path-nya benar

// const db = getFirestore(app);
// const auth = getAuth(app);

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Login ke Firebase Auth
//       await loginUser(email, password);

//       // 2. Ambil UID user yang baru login
//       const uid = auth.currentUser.uid;

//       // 3. Ambil data user dari Firestore (koleksi: users, dokumen: UID)
//       const userDocRef = doc(db, "users", uid);
//       const userSnap = await getDoc(userDocRef);

//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         const role = userData.role;

//         // 4. Arahkan berdasarkan role
//         if (role === "admin") {
//           navigate("/admin");
//         } else if (role === "user") {
//           navigate("/user");
//         } else {
//           alert("Role tidak dikenali!");
//         }

//       } else {
//         alert("Data pengguna tidak ditemukan di Firestore!");
//       }

//     } catch (error) {
//       alert("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-6 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-4">Login</h2>

//         <label className="block mb-2">Email</label>
//         <input
//           type="email"
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label className="block mb-2">Password</label>
//         <input
//           type="password"
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Login
//         </button>

//         <p className="mt-4 text-sm">
//           Belum punya akun?{" "}
//           <Link to="/register" className="text-blue-500 underline">
//             Daftar di sini
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// pages/LoginPage.jsx
// import React, { useState } from "react";
// import { loginUser } from "../firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/Config"; // pastikan path-nya benar

// const db = getFirestore(app);
// const auth = getAuth(app);

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Login ke Firebase Auth
//       await loginUser(email, password);

//       // 2. Ambil UID user yang baru login
//       const uid = auth.currentUser.uid;

//       // 3. Ambil data user dari Firestore (koleksi: users, dokumen: UID)
//       const userDocRef = doc(db, "users", uid);
//       const userSnap = await getDoc(userDocRef);

//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         const role = userData.role;

//         // 4. Arahkan berdasarkan role
//         if (role === "admin") {
//           navigate("/admin");
//         } else if (role === "user") {
//           navigate("/user");
//         } else {
//           alert("Role tidak dikenali!");
//         }

//       } else {
//         alert("Data pengguna tidak ditemukan di Firestore!");
//       }

//     } catch (error) {
//       alert("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <form
//         onSubmit={handleLogin}
//         className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-white">Login</h2>

//         <label className="block mb-2 text-gray-300">Email</label>
//         <input
//           type="email"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           autoComplete="username"
//         />

//         <label className="block mb-2 text-gray-300">Password</label>
//         <input
//           type="password"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="current-password"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition-colors duration-200"
//         >
//           Login
//         </button>

//         <p className="mt-6 text-center text-gray-400 text-sm">
//           Belum punya akun?{" "}
//           <Link to="/register" className="text-blue-500 underline hover:text-blue-400">
//             Daftar di sini
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import { loginUser } from "../firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/Config"; // pastikan path-nya benar

// const db = getFirestore(app);
// const auth = getAuth(app);

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Login ke Firebase Auth
//       await loginUser(email, password);

//       // 2. Ambil UID user yang baru login
//       const uid = auth.currentUser.uid;

//       // 3. Ambil data user dari Firestore (koleksi: users, dokumen: UID)
//       const userDocRef = doc(db, "users", uid);
//       const userSnap = await getDoc(userDocRef);

//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         const role = userData.role;

//         // 4. Arahkan berdasarkan role
//         if (role === "admin") {
//           navigate("/admin");
//         } else if (role === "user") {
//           navigate("/user");
//         } else {
//           alert("Role tidak dikenali!");
//         }

//       } else {
//         alert("Data pengguna tidak ditemukan di Firestore!");
//       }

//     } catch (error) {
//       alert("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <form
//         onSubmit={handleLogin}
//         className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-white">Login</h2>

//         <label className="block mb-2 text-gray-300">Email</label>
//         <input
//           type="email"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           autoComplete="username"
//         />

//         <label className="block mb-2 text-gray-300">Password</label>
//         <input
//           type="password"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="current-password"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition-colors duration-200"
//         >
//           Login
//         </button>

//         <p className="mt-6 text-center text-gray-400 text-sm">
//           Belum punya akun?{" "}
//           <Link to="/register" className="text-blue-500 underline hover:text-blue-400">
//             Daftar di sini
//           </Link>
//         </p>

//         {/* Tombol/link kembali ke Home Page */}
//         <div className="mt-4 text-center">
//           <Link
//             to="/"
//             className="text-gray-300 hover:text-white underline cursor-pointer"
//           >
//             &larr; Kembali ke Home Page
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import { loginUser } from "../firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/Config";

// const db = getFirestore(app);
// const auth = getAuth(app);

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await loginUser(email, password);
//       const uid = auth.currentUser.uid;
//       const userDocRef = doc(db, "users", uid);
//       const userSnap = await getDoc(userDocRef);

//       if (userSnap.exists()) {
//         const role = userSnap.data().role;
//         if (role === "admin") navigate("/admin");
//         else if (role === "user") navigate("/user");
//         else alert("Role tidak dikenali!");
//       } else {
//         alert("Data pengguna tidak ditemukan di Firestore!");
//       }
//     } catch (error) {
//       alert("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
//       <form
//         onSubmit={handleLogin}
//         className="backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-xl shadow-lg max-w-md w-full p-10"
//       >
//         <div className="flex flex-col items-center mb-8">
//           {/* Ikon sederhana */}
//           <svg
//             className="w-12 h-12 text-blue-500 mb-3"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 11c-1.657 0-3 1.567-3 3.5S10.343 18 12 18s3-1.567 3-3.5-1.343-3.5-3-3.5z" />
//             <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
//           </svg>
//           <h2 className="text-white text-4xl font-extrabold tracking-tight">
//             Welcome Back
//           </h2>
//           <p className="text-gray-400 mt-1 text-sm">
//             Please login to your account
//           </p>
//         </div>

//         <label className="block text-gray-300 text-sm font-semibold mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white mb-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//           placeholder="you@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           autoComplete="username"
//         />

//         <label className="block text-gray-300 text-sm font-semibold mb-2">
//           Password
//         </label>
//         <input
//           type="password"
//           className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white mb-8 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//           placeholder="••••••••"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="current-password"
//         />

//         <button
//           type="submit"
//           className="w-full py-4 bg-blue-600 rounded-lg text-white font-bold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//         >
//           Login
//         </button>

//         <p className="mt-6 text-center text-gray-400 text-sm">
//           Belum punya akun?{" "}
//           <Link
//             to="/register"
//             className="text-blue-500 underline hover:text-blue-400 font-semibold"
//           >
//             Daftar di sini
//           </Link>
//         </p>

//         <div className="mt-5 text-center">
//           <Link
//             to="/"
//             className="text-gray-400 hover:text-white underline text-sm cursor-pointer"
//           >
//             &larr; Kembali ke Home Page
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import { loginUser } from "../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../firebase/Config";
import logo from "../assets/logo.png";  // import logo

const db = getFirestore(app);
const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
      const uid = auth.currentUser.uid;
      const userDocRef = doc(db, "users", uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const role = userData.role;

        if (role === "admin") {
          navigate("/admin");
        } else if (role === "user") {
          navigate("/user");
        } else {
          alert("Role tidak dikenali!");
        }
      } else {
        alert("Data pengguna tidak ditemukan di Firestore!");
      }
    } catch (error) {
      alert("Login gagal: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-xl shadow-lg max-w-md w-full p-10"
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 mb-4 object-contain"
          />
          <h2 className="text-white text-4xl font-extrabold tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Please login to your account
          </p>
        </div>

        <label className="block mb-2 text-gray-300">Email</label>
        <input
          type="email"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <label className="block mb-2 text-gray-300">Password</label>
        <input
          type="password"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition-colors duration-200"
        >
          Login
        </button>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-500 underline hover:text-blue-400">
            Daftar di sini
          </Link>
        </p>

        <p className="mt-4 text-center text-gray-400 text-sm">
          <Link to="/" className="text-gray-300 underline hover:text-gray-100">
            &larr; Kembali ke Beranda
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
