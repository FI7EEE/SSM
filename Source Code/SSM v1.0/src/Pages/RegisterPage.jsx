// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";
// import app from "../firebase/Config"; // pastikan path sesuai

// const auth = getAuth(app);
// const db = getFirestore(app);

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // default role "user"
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Buat akun di Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // 2. Simpan data tambahan ke Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         email: user.email,
//         role: role, // bisa "user" atau "admin"
//       });

//       alert("Registrasi berhasil!");
//       navigate("/login");

//     } catch (error) {
//       alert("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleRegister}
//         className="bg-white p-6 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-4">Register</h2>

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

//         <label className="block mb-2">Role</label>
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option> {/* opsional: matikan jika kamu tidak ingin user pilih sendiri */}
//         </select>

//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
//         >
//           Register
//         </button>

//         <p className="mt-4 text-sm">
//           Sudah punya akun?{" "}
//           <Link to="/login" className="text-blue-500 underline">
//             Login di sini
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";
// import app from "../firebase/Config"; // pastikan path sesuai

// const auth = getAuth(app);
// const db = getFirestore(app);

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // default role "user"
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Buat akun di Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // 2. Simpan data tambahan ke Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         email: user.email,
//         role: role, // bisa "user" atau "admin"
//       });

//       alert("Registrasi berhasil!");
//       navigate("/login");

//     } catch (error) {
//       alert("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <form
//         onSubmit={handleRegister}
//         className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-white">Register</h2>

//         <label className="block mb-2 text-gray-300">Email</label>
//         <input
//           type="email"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           autoComplete="username"
//         />

//         <label className="block mb-2 text-gray-300">Password</label>
//         <input
//           type="password"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="new-password"
//         />

//         <label className="block mb-2 text-gray-300">Role</label>
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option> {/* opsional */}
//         </select>

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition-colors duration-200"
//         >
//           Register
//         </button>

//         <p className="mt-6 text-center text-gray-400 text-sm">
//           Sudah punya akun?{" "}
//           <Link to="/login" className="text-blue-500 underline hover:text-blue-400">
//             Login di sini
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";
// import app from "../firebase/Config"; // pastikan path sesuai

// const auth = getAuth(app);
// const db = getFirestore(app);

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // default role "user"
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Buat akun di Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // 2. Simpan data tambahan ke Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         email: user.email,
//         role: role, // bisa "user" atau "admin"
//       });

//       alert("Registrasi berhasil!");
//       navigate("/login");

//     } catch (error) {
//       alert("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <form
//         onSubmit={handleRegister}
//         className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-white">Register</h2>

//         <label className="block mb-2 text-gray-300">Email</label>
//         <input
//           type="email"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           autoComplete="username"
//         />

//         <label className="block mb-2 text-gray-300">Password</label>
//         <input
//           type="password"
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="new-password"
//         />

//         <label className="block mb-2 text-gray-300">Role</label>
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option> {/* opsional */}
//         </select>

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition-colors duration-200"
//         >
//           Register
//         </button>

//         <p className="mt-6 text-center text-gray-400 text-sm">
//           Sudah punya akun?{" "}
//           <Link to="/login" className="text-blue-500 underline hover:text-blue-400">
//             Login di sini
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

// export default RegisterPage;
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";
// import app from "../firebase/Config";

// const auth = getAuth(app);
// const db = getFirestore(app);

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       await setDoc(doc(db, "users", user.uid), {
//         email: user.email,
//         role: role,
//       });

//       alert("Registrasi berhasil!");
//       navigate("/login");
//     } catch (error) {
//       alert("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
//       <form
//         onSubmit={handleRegister}
//         className="backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-xl shadow-lg max-w-md w-full p-10"
//       >
//         <div className="flex flex-col items-center mb-8">
//           {/* Ikon */}
//           <svg
//             className="w-12 h-12 text-green-500 mb-3"
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
//             Create Account
//           </h2>
//           <p className="text-gray-400 mt-1 text-sm">
//             Daftar untuk memulai akses Anda
//           </p>
//         </div>

//         <label className="block text-gray-300 text-sm font-semibold mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white mb-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
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
//           className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white mb-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
//           placeholder="••••••••"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="new-password"
//         />

//         <label className="block text-gray-300 text-sm font-semibold mb-2">
//           Role
//         </label>
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white mb-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button
//           type="submit"
//           className="w-full py-4 bg-green-600 rounded-lg text-white font-bold text-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//         >
//           Register
//         </button>

//         <p className="mt-6 text-center text-gray-400 text-sm">
//           Sudah punya akun?{" "}
//           <Link
//             to="/login"
//             className="text-blue-500 underline hover:text-blue-400 font-semibold"
//           >
//             Login di sini
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

// export default RegisterPage;
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import app from "../firebase/Config";
import logo from "../assets/logo.png"; // import logo

const auth = getAuth(app);
const db = getFirestore(app);

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: role,
      });

      alert("Registrasi berhasil!");
      navigate("/login");
    } catch (error) {
      alert("Registrasi gagal: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleRegister}
        className="backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-xl shadow-lg max-w-md w-full p-10"
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 mb-4 object-contain"
          />
          <h2 className="text-white text-4xl font-extrabold tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Daftar untuk memulai akses Anda
          </p>
        </div>

        <label className="block mb-2 text-gray-300">Email</label>
        <input
          type="email"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <label className="block mb-2 text-gray-300">Password</label>
        <input
          type="password"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />

        <label className="block mb-2 text-gray-300">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition-colors duration-200"
        >
          Register
        </button>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 underline hover:text-blue-400">
            Login di sini
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

export default RegisterPage;
