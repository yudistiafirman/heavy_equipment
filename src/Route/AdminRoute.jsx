import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import AdminCareer from '../Components/Admin/AdminCareer'
import AdminFasilitas from '../Components/AdminFasiltas'
import AdminGaleri from '../Components/AdminGaleri/AdminGaleri'
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar'
import AdminPelatihan from '../Components/AdminPelatihan/AdminPelatihan'
import Career from '../Components/Career/Career'
const AdminRoute = () => {
  return (
    <Router>

      <div>
    <AdminNavbar/>
    <Routes>
    <Route  path="/admincareer" element={<AdminCareer/>} />
    <Route  path="/admingaleri" element={<AdminGaleri/>} />
    <Route  path="/adminpelatihan" element={<AdminPelatihan/>} />
    <Route  path="/adminfasilitas" element={<AdminFasilitas/>} />
    </Routes>

      </div>
    </Router>
  )
}

export default AdminRoute
