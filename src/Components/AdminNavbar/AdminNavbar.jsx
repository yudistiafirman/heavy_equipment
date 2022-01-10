import React from 'react'
import './AdminNavbar.css'
import HecLogo from '../Navbar/assets/heclogo.png'
import { AiFillPicture, AiOutlineRead, AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const AdminNavbar = () => {
    return (
        <div>
            <div className="admin-navbar">
                <img style={{marginLeft:'20px'}} src={HecLogo} width="140px"/>

            

              
            </div>
            <div className='admin-menu'>
                <div className="admin-navbar-link-container">
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'#6B7280',width:'200px'}} to='/admincareer'>
                    <AiOutlineUsergroupAdd  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div className='a-nav-link'  style={{marginRight:'70px'}} >
                    Career
                    </div>
                 
                    </Link>
                   
                   
                </div>
                <div className="admin-navbar-link-container">
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'#6B7280',width:'200px'}} to='/admingaleri'>
                    <AiFillPicture  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'75px'}} >
                    Galeri
                    </div>
                     
                      
                    </Link>
                   
                </div>
                <div className="admin-navbar-link-container">
                    <Link style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'#6B7280',width:'200px'}} to='/adminpelatihan'>
                    <AiOutlineRead  style={{width:'25px',height:'25px',marginLeft:'50px'}}/>
                    <div style={{marginRight:'50px'}} >
                    Pelatihan
                    </div>
                     
                      
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar
