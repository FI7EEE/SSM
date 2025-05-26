// // // const AboutPage = () => {
// // //   return (
// // //     <div className="pt-24 px-8">
// // //       <h1 className="text-4xl font-bold mb-4">Tentang Tim Kami</h1>
// // //       <p className="text-lg text-gray-700">
// // //         Kami adalah tim pengembang Smart Space Management...
// // //       </p>
// // //       {/* Tambahkan profil tim di sini */}
// // //     </div>
// // //   );
// // // };

// // // export default AboutPage;
// // import React from "react";
// // import { Link } from "react-router-dom";

// // const teamMembers = [
// //   {
// //     name: "Akhmad Hendriawan ST, MT",
// //     role: "Dosen Pembimbing",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/dospem.jpg?raw=true", // contoh foto placeholder
// //   },
// //   {
// //     name: "Khrisna P.Y",
// //     role: "Project Manager",
// //     photo: "https://i.pravatar.cc/150?img=20",
// //   },
// //   {
// //     name: "Bintang Firgi S",
// //     role: "UI/UX Designer",
// //     photo: "https://i.pravatar.cc/150?img=30",
// //   },
// //   {
// //     name: "Adrian Iqbal",
// //     role: "Software Developer",
// //     photo: "https://i.pravatar.cc/150?img=40",
// //   },
// //   {
// //     name: "Aditya Wahyu",
// //     role: "3D Designer",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Foto%20Adit.jpg?raw=true",
// //   },
// //     {
// //     name: "Royyan Firdaus",
// //     role: "Hardware",
// //     photo: "https://i.pravatar.cc/150?img=50",
// //   },
// // ];

// // const AboutPage = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 px-8">
// //       <h1 className="text-4xl font-bold mb-8 text-center">Tentang Tim Kami</h1>
// //       <p className="max-w-3xl mx-auto text-center text-gray-400 mb-12">
// //         Kami adalah tim pengembang Smart Space Management yang berdedikasi untuk
// //         menciptakan solusi teknologi modern bagi pengelolaan ruang yang efisien dan cerdas.
// //       </p>

// //       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
// //         {teamMembers.map((member, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300"
// //           >
// //             <img
// //               src={member.photo}
// //               alt={member.name}
// //               className="w-28 h-28 rounded-full mb-4 object-cover object-center"
// //             />
// //             <h3 className="text-xl font-semibold">{member.name}</h3>
// //             <p className="text-indigo-400 mt-1 text-center">{member.role}</p>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="text-center mt-16">
// //         <Link to="/">
// //           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-colors duration-300">
// //             Kembali ke Landing Page
// //           </button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutPage;
// import React from "react";
// import { Link } from "react-router-dom";

// const teamMembers = [
//   {
//     name: "Akhmad Hendriawan ST, MT",
//     role: "Dosen Pembimbing",
//     photo:
//       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/dospem.jpg?raw=true",
//   },
//    {
//      name: "Khrisna P.Y",
//      role: "Project Manager",
//      photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Khrisna%20py.jpg?raw=true",
//    },
//    {
//      name: "Bintang Firgi S",
//      role: "UI/UX Designer",
//      photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Bintang%20firgi.jpg?raw=true",
//    },
//   {
//     name: "Adrian Iqbal",
//     role: "Software Developer",
//     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/adrian.jpg?raw=true",
//   },
//   {
//     name: "Aditya Wahyu",
//     role: "3D Designer",
//     photo:
//       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Foto%20Adit.jpg?raw=true",
//   },
//   {
//     name: "Royyan Firdaus",
//     role: "Hardware",
//     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/foto%20royy.jpg?raw=true",
//   },
// ];

// const AboutPage = () => {
//   return (
//     // <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 px-8">
//     <div className="min-h-screen bg-gray-900 text-gray-100 pt-8 px-8">

//       <h1 className="text-4xl font-bold mb-8 text-center">Tentang Tim Kami</h1>
//       <p className="max-w-3xl mx-auto text-center text-gray-400 mb-12">
//         Kami adalah tim pengembang Smart Space Management yang berdedikasi untuk
//         menciptakan solusi teknologi modern bagi pengelolaan ruang yang efisien dan cerdas.
//       </p>

//       {/* Grid sejajar dan ukuran sama */}
//       <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
//         {teamMembers.map((member, idx) => (
//           <div
//             key={idx}
//             className="w-60 h-72 bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-indigo-500/50 transition duration-300"
//           >
//             <img
//               src={member.photo}
//               alt={member.name}
//               className="w-28 h-28 rounded-full mb-4 object-cover object-center border-4 border-indigo-500"
//             />
//             <h3 className="text-lg font-semibold">{member.name}</h3>
//             <p className="text-indigo-400 mt-1">{member.role}</p>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-16">
//         <Link to="/">
//           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-colors duration-300">
//             Kembali ke Landing Page
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
// // import React from "react";
// // import { Link } from "react-router-dom";

// // const teamMembers = [
// //   {
// //     name: "Akhmad Hendriawan ST, MT",
// //     role: "Dosen Pembimbing",
// //     photo:
// //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/dospem.jpg?raw=true",
// //   },
// //   {
// //     name: "Khrisna P.Y",
// //     role: "Project Manager",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Khrisna%20py.jpg?raw=true",
// //   },
// //   {
// //     name: "Bintang Firgi S",
// //     role: "UI/UX Designer",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Bintang%20firgi.jpg?raw=true",
// //   },
// //   {
// //     name: "Adrian Iqbal",
// //     role: "Software Developer",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/adrian.jpg?raw=true",
// //   },
// //   {
// //     name: "Aditya Wahyu",
// //     role: "3D Designer",
// //     photo:
// //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Foto%20Adit.jpg?raw=true",
// //   },
// //   {
// //     name: "Royyan Firdaus",
// //     role: "Hardware",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/foto%20royy.jpg?raw=true",
// //   },
// // ];

// // const AboutPage = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-900 text-gray-100 pt-8 px-8 pb-20">
// //       <h1 className="text-4xl font-bold mb-8 text-center">Tentang Tim Kami</h1>
// //       <p className="max-w-3xl mx-auto text-center text-gray-400 mb-12">
// //         Kami adalah tim pengembang Smart Space Management yang berdedikasi untuk
// //         menciptakan solusi teknologi modern bagi pengelolaan ruang yang efisien dan cerdas.
// //       </p>

// //       {/* Grid sejajar dan responsif */}
// //       <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
// //         {teamMembers.map((member, idx) => (
// //           <div
// //             key={idx}
// //             className="w-60 h-72 bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-indigo-500/50 transition duration-300"
// //           >
// //             <img
// //               src={member.photo}
// //               alt={member.name}
// //               className="w-28 h-28 rounded-full mb-4 object-cover object-center border-4 border-indigo-500"
// //             />
// //             <h3 className="text-lg font-semibold">{member.name}</h3>
// //             <p className="text-indigo-400 mt-1">{member.role}</p>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="text-center mt-16 mb-20">
// //         <Link to="/">
// //           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-colors duration-300">
// //             Kembali ke Landing Page
// //           </button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutPage;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const teamMembers = [
// //   {
// //     name: "Akhmad Hendriawan ST, MT",
// //     role: "Dosen Pembimbing",
// //     photo:
// //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/dospem.jpg?raw=true",
// //   },
// //    {
// //      name: "Khrisna P.Y",
// //      role: "Project Manager",
// //      photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Khrisna%20py.jpg?raw=true",
// //    },
// //    {
// //      name: "Bintang Firgi S",
// //      role: "UI/UX Designer",
// //      photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Bintang%20firgi.jpg?raw=true",
// //    },
// //   {
// //     name: "Adrian Iqbal",
// //     role: "Software Developer",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/adrian.jpg?raw=true",
// //   },
// //   {
// //     name: "Aditya Wahyu",
// //     role: "3D Designer",
// //     photo:
// //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Foto%20Adit.jpg?raw=true",
// //   },
// //   {
// //     name: "Royyan Firdaus",
// //     role: "Hardware",
// //     photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/foto%20royy.jpg?raw=true",
// //   },
// // ];

// // const AboutPage = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-900 text-gray-100 pt-8 px-8 pb-20">
// //       <h1 className="text-4xl font-bold mb-8 text-center">Tentang Tim Kami</h1>
// //       <p className="max-w-3xl mx-auto text-center text-gray-400 mb-12">
// //         Kami adalah tim pengembang Smart Space Management yang berdedikasi untuk
// //         menciptakan solusi teknologi modern bagi pengelolaan ruang yang efisien dan cerdas.
// //       </p>

// //       {/* Grid sejajar dan responsif */}
// //       <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
// //         {teamMembers.map((member, idx) => (
// //           <div
// //             key={idx}
// //             className="w-60 h-72 bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-indigo-500/50 transition duration-300"
// //           >
// //             <img
// //               src={member.photo}
// //               alt={member.name}
// //               className="w-28 h-28 rounded-full mb-4 object-cover object-center border-4 border-indigo-500"
// //             />
// //             <h3 className="text-lg font-semibold">{member.name}</h3>
// //             <p className="text-indigo-400 mt-1">{member.role}</p>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="text-center mt-16 mb-20">
// //         <Link to="/">
// //           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-colors duration-300">
// //             Kembali ke Landing Page
// //           </button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutPage;
// // // import React, { useEffect } from "react";
// // // import { Link } from "react-router-dom";

// // // const teamMembers = [
// // //   {
// // //     name: "Akhmad Hendriawan ST, MT",
// // //     role: "Dosen Pembimbing",
// // //     photo:
// // //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/dospem.jpg?raw=true",
// // //   },
// // //   {
// // //     name: "Khrisna P.Y",
// // //     role: "Project Manager",
// // //     photo:
// // //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Khrisna%20py.jpg?raw=true",
// // //   },
// // //   {
// // //     name: "Bintang Firgi S",
// // //     role: "UI/UX Designer",
// // //     photo:
// // //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Bintang%20firgi.jpg?raw=true",
// // //   },
// // //   {
// // //     name: "Adrian Iqbal",
// // //     role: "Software Developer",
// // //     photo:
// // //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/adrian.jpg?raw=true",
// // //   },
// // //   {
// // //     name: "Aditya Wahyu",
// // //     role: "3D Designer",
// // //     photo:
// // //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Foto%20Adit.jpg?raw=true",
// // //   },
// // //   {
// // //     name: "Royyan Firdaus",
// // //     role: "Hardware",
// // //     photo:
// // //       "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/foto%20royy.jpg?raw=true",
// // //   },
// // // ];

// // // const AboutPage = () => {
// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);
// // //   }, []); // akan dijalankan hanya sekali saat komponen dipasang (mounted)

// // //   return (
// // //     <div className="min-h-screen bg-gray-900 text-gray-100 pt-8 px-8 pb-20">
// // //       <h1 className="text-4xl font-bold mb-8 text-center">Tentang Tim Kami</h1>
// // //       <p className="max-w-3xl mx-auto text-center text-gray-400 mb-12">
// // //         Kami adalah tim pengembang Smart Space Management yang berdedikasi untuk
// // //         menciptakan solusi teknologi modern bagi pengelolaan ruang yang efisien dan cerdas.
// // //       </p>

// // //       <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
// // //         {teamMembers.map((member, idx) => (
// // //           <div
// // //             key={idx}
// // //             className="w-60 h-72 bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-indigo-500/50 transition duration-300"
// // //           >
// // //             <img
// // //               src={member.photo}
// // //               alt={member.name}
// // //               className="w-28 h-28 rounded-full mb-4 object-cover object-center border-4 border-indigo-500"
// // //             />
// // //             <h3 className="text-lg font-semibold">{member.name}</h3>
// // //             <p className="text-indigo-400 mt-1">{member.role}</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="text-center mt-16 mb-20">
// // //         <Link to="/">
// // //           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-colors duration-300">
// // //             Kembali ke Landing Page
// // //           </button>
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AboutPage;
import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const dosen = {
  name: "Akhmad Hendriawan ST, MT",
  role: "Dosen Pembimbing",
  photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/dospem.jpg?raw=true",
};

const mahasiswa = [
  {
    name: "Khrisna P.Y",
    role: "Project Manager",
    photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Khrisna%20py.jpg?raw=true",
  },
  {
    name: "Bintang Firgi S",
    role: "UI/UX Designer",
    photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Bintang%20firgi.jpg?raw=true",
  },
  {
    name: "Adrian Iqbal",
    role: "Software Developer",
    photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/adrian.jpg?raw=true",
  },
  {
    name: "Aditya Wahyu",
    role: "3D Designer",
    photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/Foto%20Adit.jpg?raw=true",
  },
  {
    name: "Royyan Firdaus",
    role: "Hardware",
    photo: "https://github.com/FI7EEE/SSM/blob/main/Assets/Foto%20TIM/roy.jpg?raw=true",
  },
];

const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-8 px-6 pb-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Tentang Tim Kami</h1>
      <p className="max-w-3xl mx-auto text-center text-gray-400 mb-12">
        Kami adalah tim pengembang Smart Space Management yang berdedikasi untuk menciptakan solusi teknologi modern bagi pengelolaan ruang yang efisien dan cerdas.
      </p>

      {/* Dosen */}
      <div className="flex justify-center mb-12">
        <div className="w-60 h-72 bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-indigo-500/50 transition duration-300">
          <img
            src={dosen.photo}
            alt={dosen.name}
            className="w-28 h-28 rounded-full mb-4 object-cover object-center border-4 border-indigo-500"
          />
          <h3 className="text-lg font-semibold">{dosen.name}</h3>
          <p className="text-indigo-400 mt-1">{dosen.role}</p>
        </div>
      </div>

      {/* Mahasiswa - satu baris responsif */}
      <div className="flex flex-wrap justify-center gap-6">
        {mahasiswa.map((member, idx) => (
          <div
            key={idx}
            className="w-52 h-64 bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:shadow-indigo-500/50 transition duration-300"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-3 object-cover object-center border-4 border-indigo-500"
            />
            <h3 className="text-md font-semibold">{member.name}</h3>
            <p className="text-indigo-400 text-sm mt-1">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Tombol Kembali */}
      <div className="text-center mt-16">
        <Link to="/">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-colors duration-300">
            Kembali ke Landing Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
