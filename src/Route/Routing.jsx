import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import PelayananKami from '../Components/PelayananKami/PelayananKami';
import TentangHec from '../Components/TentangHec/TentangHec';
import FasilitasPendidikan from '../Components/FasilitiasPendidikan/FasilitasPendidikan'
import InfoPelatihan from '../Components/InfoPelatihan/InfoPelatihan'
import Career from '../Components/Career/Career'
import Kontak from '../Components/Kontak/Kontak'
import Galeri from '../Components/Galeri/Galeri'
import Footer from '../Components/Footer/Footer'
import LatarBelakang from '../Components/TentangHec/LatarBelakang';
import NilaiInti from '../Components/TentangHec/NilaiInti';
import VisiDanMisi from '../Components/TentangHec/VisiDanMisi';
import SO from '../Components/TentangHec/SO';
import Program from '../Components/PelayananKami/Program'
import LabourSupply from '../Components/PelayananKami/LabourSupply'
import Konsultan from '../Components/PelayananKami/Konsultan'
import Penjualan from '../Components/PelayananKami/Penjualan'
import Jasa from '../Components/PelayananKami/Jasa'
import DetailPelatihan from '../Components/InfoPelatihan/DetailPelatihan';
import CareerDetail from '../Components/Career/CareerDetail';
import DetailPenjualan from '../Components/PelayananKami/DetailPenjualan';
import DetailService from '../Components/PelayananKami/DetailService';
import MenuProvider from "react-flexible-sliding-menu";
import SlidingMenu from '../Components/SlidingMenu/SlidingMenu';
import AdminRoute from './AdminRoute';
const Routing = () => {
    return (
  
        <Router>
               
              <MenuProvider MenuComponent={SlidingMenu} animation="push" >
           
          <div>
          <Navbar/>
          <Routes>
             <Route path="/" exact  element={<Home/>} />
             <Route path="/tentangHec" element={<TentangHec/>} />
             <Route path="/pelayanKami" element={<PelayananKami/>} />
             <Route path="/galeri" element={<Galeri/>} />
             <Route path="/fasilitas" element={<FasilitasPendidikan/>} />
             <Route path="/latar" element={<LatarBelakang/>} />
             <Route path="/nilai" element={<NilaiInti/>} />
             <Route path="/visi" element={<VisiDanMisi/>} />
             <Route path="/so" element={<SO/>} />
             <Route path="/program" element={<Program/>} />
             <Route path="/labour" element={<LabourSupply/>} />
             <Route path="/konsultan" element={<Konsultan/>} />
             <Route path="/penjualan" element={<Penjualan/>} />
             <Route path="/detailPenjualan" element={<DetailPenjualan/>} />
             <Route path="/jasa" element={<Jasa/>} />
             <Route path="/detailJasa" element={<DetailService/>} />
             <Route path="/infoPelatihan" element={<InfoPelatihan/>} />
             <Route path="/infoPelatihan/detailPelatihan/:id/:name" element={<DetailPelatihan/>} />
             <Route path="/career" element={<Career/>} />
             <Route path="/career/detailCareer/:id/:name" element={<CareerDetail/>} />
             <Route path="/kontak" element={<Kontak/>} />
          
          
             
             </Routes>
          <Footer/>
       
            </div>
           
            </MenuProvider>
         
        </Router>
    )
}

export default Routing
