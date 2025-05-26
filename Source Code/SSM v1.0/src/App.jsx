// import React from "react";
// import bgVideo from "./assets/bg.mp4";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";
// import Banner2 from "./components/Banner/Banner2";
// import Footer from "./components/Footer/Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-in-out",
//     });
//   });

//   return (
//     <div>
//       <div className="h-[700px] relative">
//         <video
//           autoPlay
//           loop
//           muted
//           className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
//         >
//           <source src={bgVideo} type="video/mp4" />
//         </video>
//         <Navbar />
//         <Hero />
//       </div>

//       {/* Services Card Section */}
//       <Services />
//       <Banner />
//       <Banner2 />
//       <Footer />
//     </div>
//   );
// };
// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import AdminDashboard from "./pages/AdminDashboard";
// import UserDashboard from "./pages/UserDashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/user" element={<UserDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import bgVideo from "./assets/bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import AboutPage from "./Pages/AboutPage";
import AboutSsmPage from "./Pages/AboutSsmPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import DashboardAdmin from "./Pages/admin/DashboardAdmin";
import UserDashboard from "./Pages/user/DashboardUser";
import Monitoring from "./Pages/admin/Monitoring";
import Analytics from "./Pages/admin/Analytics";
import Customers from "./Pages/admin/Customers";
import ManageRooms from "./Pages/admin/ManageRooms";
import ManageUsers from "./Pages/admin/ManageUsers";
import ProfileAdmin from "./Pages/admin/ProfileAdmin";
import OrdersAdmin from "./Pages/admin/ManageOrders";
import ProfileUser from "./Pages/user/ProfileUser";
import RoomReservation from "./Pages/user/RoomReservation";
import Notifications from "./Pages/user/Notifications";
import ManageOrders from "./Pages/admin/ManageOrders";

import RoomsUser from "./Pages/user/RoomsUser";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/aboutus" element={<AboutSsmPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />{" "}
      {/* Pastikan ini ada */}
      <Route path="/user/profile" element={<ProfileUser />} />
      <Route path="/admin/profile" element={<ProfileAdmin />} />
      <Route path="/admin/user" element={<ManageUsers />} />
      <Route path="/admin/monitoring" element={<Monitoring />} />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/customers" element={<Customers />} />
      <Route path="/admin/rooms" element={<ManageRooms />} />
      <Route path="/user/rooms" element={<RoomsUser />} />
      <Route path="/admin/orders" element={<OrdersAdmin />} />
      <Route path="/admin" element={<DashboardAdmin />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/user/reservasi" element={<RoomReservation />} />
       <Route path="/user/notifications" element={<Notifications />} />
         <Route path="/admin/pesanan" element={<ManageOrders />} />
    </Routes>
  );
}

export default App;
