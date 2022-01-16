import React from 'react'
import './AdminNavbar.css'
import HecLogo from '../Navbar/assets/heclogo.png'
import { AiFillPicture, AiOutlineLogout, AiOutlineRead, AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai'
import {RiBuilding2Line, RiServiceLine} from 'react-icons/ri'
import {FaTruckMonster} from 'react-icons/fa'
import { Link,useLocation, useNavigate } from 'react-router-dom'
const AdminNavbar = () => {
    const location =useLocation()
    const navigate= useNavigate()
    const onLogoutAdmin=()=>{
        localStorage.removeItem('user')
        window.location= '/'
    }
    return (
        <div>
            <div className="admin-navbar">
                <img style={{marginLeft:'20px'}} src={HecLogo} width="140px"/>

            

              
            </div>
            <div className='admin-menu'>
                <ul >
                    <li>
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'200px',color: location.pathname === '/'?"#FDC232":"" }} to='/'>
                    <AiOutlineUsergroupAdd  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div className='a-nav-link'  style={{marginRight:'70px'}} >
                    Career
                    </div>
                 
                    </Link>
                    </li>

                    <li>
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'200px',color: location.pathname === '/admingaleri'?"#FDC232":""}} to='/admingaleri'>
                    <AiFillPicture  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'75px'}} >
                    Galeri
                    </div>
                     
                      
                    </Link>
                    </li>
                    <li>
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'200px',color: location.pathname === '/adminpelatihan'?"#FDC232":""}} to='/adminpelatihan'>
                    <AiOutlineRead  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'52px'}} >
                    Pelatihan
                    </div>
                     
                      
                    </Link>
                    </li>
                    <li>
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'200px',color: location.pathname === '/adminfasilitas'?"#FDC232":""}} to='/adminfasilitas'>
                    <RiBuilding2Line  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'58px'}} >
                        Fasilitas 
                    </div>
                     
                      
                    </Link>
                    </li>
                    <li>
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'250px',color: location.pathname === '/adminjasa'?"#FDC232":""}} to='/adminjasa'>
                    <RiServiceLine style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'78px'}} >
                        Jasa Service
                    </div>
                     
                      
                    </Link>
                    </li>
                    <li>
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'200px',color: location.pathname === '/adminjasa'?"#FDC232":""}} to='/adminjasa'>
                    <FaTruckMonster style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'48px'}} >
                        Penjualan 
                    </div>
                     
                      
                    </Link>
                    </li>
                    <li>
                    <a style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'200px',cursor:'pointer' }} onClick={onLogoutAdmin} >
                    <AiOutlineLogout  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'65px'}} >
                        Logout
                    </div>
                     
                      
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminNavbar
