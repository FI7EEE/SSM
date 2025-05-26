import React from "react";
import { Link } from "react-router-dom";

const AboutSsmPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Apa itu Smart Space Management (SSM)?</h1>

      <p className="max-w-3xl mx-auto text-center text-gray-400 mb-12">
        Smart Space Management (SSM) adalah sistem cerdas berbasis IoT dan AI yang dirancang untuk mengelola,
        memantau, dan mengoptimalkan penggunaan ruang secara efisien. Sistem ini dilengkapi dengan fitur
        reservasi ruangan, pemantauan suhu, deteksi kehadiran, dan visualisasi data real-time untuk meningkatkan kenyamanan dan efisiensi ruang.
      </p>

      <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 space-y-6">
        <p>
          Dalam era digital saat ini, pengelolaan ruang tidak hanya tentang menyediakan tempat,
          tetapi juga bagaimana ruang tersebut digunakan secara efisien. SSM hadir sebagai solusi
          yang mengintegrasikan berbagai sensor, seperti sensor suhu, gerakan, dan kamera, untuk mendeteksi kondisi ruangan secara otomatis.
        </p>
        <p>
          Dengan antarmuka pengguna yang intuitif, pengguna dapat dengan mudah memesan ruangan,
          melihat status ketersediaan, dan menerima notifikasi status pemesanan melalui sistem dashboard real-time.
        </p>
        <p>
          Sistem ini sangat cocok digunakan di kampus, kantor, atau fasilitas umum lainnya
          yang membutuhkan pengelolaan ruang secara cerdas dan terukur.
        </p>
      </div>

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

export default AboutSsmPage;
