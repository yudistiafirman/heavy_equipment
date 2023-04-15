import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminCareer from "../Components/Admin/AdminCareer";
import AdminGaleri from "../Components/AdminGaleri/AdminGaleri";
import AdminNavbar from "../Components/AdminNavbar/AdminNavbar";
import AdminPelatihan from "../Components/AdminPelatihan/AdminPelatihan";
import AdminFasilitas from "../Components/AdminFasiltas";
import Adminjasa from "../Components/AdminJasa";
import AdminPenjualan from "../Components/AdminPenjualan";

const AdminRoute = () => {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <Routes>
          <Route exact path="/" element={<AdminCareer />} />
          <Route path="/adminfasilitas" element={<AdminFasilitas />} />
          <Route path="/admingaleri" element={<AdminGaleri />} />
          <Route path="/adminpelatihan" element={<AdminPelatihan />} />
          <Route path="/adminjasa" element={<Adminjasa />} />
          <Route path="/adminpenjualan" element={<AdminPenjualan />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AdminRoute;
