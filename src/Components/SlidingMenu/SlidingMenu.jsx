import React, { useState,useCallback } from 'react'
import './SlidingMenu.css'
import {Link,useLocation} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Logo from '../Navbar/assets/hec.png'
import Fb from '../Navbar/assets/facebook.png'
import Yt from '../Navbar/assets/youtube.png'
import Linkedin from '../Navbar/assets/linkedin.png'
import Instagram from '../Navbar/assets/instagram.png'
const SlidingMenu = ({onPressDropDownTentang, onPressDropDownPelayanan}) => {
    const [menuIdx,SetMenuIdx]= useState(0)
    const [hoverIdx,SetHoverIdx]= useState(null)
    const menuHasDropDown =[1,2]
    const [tentangMenu,SetTentangMenu]=useState(false)
    const [pelayanMenu,SetPelayananMenu]=useState(false)
    const location =useLocation()
    const menuList =[
     {
        title:'Home',
        to:'/'
     },
     {
        title:'Tentang Kami',
        to:''
     },
     {
        title:'Pelayanan Kami',
        to:''
     },
     {
        title:'Galeri',
        to:'/galeri'
     },
     {
         title:'Fasilitas dan Pelatihan',
         to:'/fasilitas'
     },
     {
         title:'Info Pelatihan',
         to:'/infoPelatihan'
     },
     {
         title:'Career',
         to:'/career'
     },
     {
         title:'Kontak',
         to:'/kontak'
     }    

]

const tentangHecNav=[
    {
        title:'Latar Belakang',
        to:'/latar'
    },
    {
        title:'Visi Misi',
        to:'/visi'
    },
    {
        title:'Nilai Inti',
        to:'/nilai'
    },
    {
        title:'Struktur Organisasi',
        to:'/so'
    },
]

const pelayanContent=[
    {
        title:'Program Pendidikan dan Pelatihan',
        to:'/program'
    },
    {
        title:'Labour Supply',
        to:'/labour'
    },
    {
        title:'Konsultan',
        to:'/konsultan'
    },
    {
        title:'Penjualan SparePart Alat Berat',
        to:'/penjualan'
    },
    {
        title:'Jasa Service Alat Berat',
        to:'/jasa'
    }
]

const onChangeRoute=(idx)=>{
        if(idx ===1){
            SetTentangMenu(true)
        }else if(idx === 2){
            SetPelayananMenu(true)
        }
     
    
  
}

const onChangeRouteSideMenu=()=>{
    window.scrollTo(0)
}




    return (
        <div className='Menu'>
            <div className="sideBarImageLogo">
                <img src={Logo} style={{width:'91px',height:'38px',marginLeft:'16px'}}/>
            </div>
            <div className="sideMenu">
                <div className="sideMenuInner">
                    <div className='sideMenuList'>

                {
                menuList.map((value,index)=>{
                  return  <div className='link-Container'   >
                        <Link onClick={()=>onChangeRoute(index)} style={{color: location.pathname === value.to ?"#FDC232":"" ,display:'flex',alignItems:'center',justifyContent:'flex-start',width:'210px'}}  to={value.to !== ''&& value.to}>{value.title.toUpperCase()}
                        {menuHasDropDown.includes(index) && <FaChevronRight style={{marginLeft:'auto'}}/> }
                        </Link>
                     
                    </div>
                })
            }
            </div>
            <div className={tentangMenu?"sideMenuTentang":"sideMenuTentang inactive"}>
                <div className="sideMenuList">
                <div style={{width:'21px',height:'20.5px'}} className="link-Container">
                    <HiArrowNarrowLeft size="large" onClick={()=>SetTentangMenu(false)} />
                </div>
                {
                tentangHecNav.map((value,index)=>{
                  return  <div className='link-Container'   >
                        <Link onClick={onChangeRouteSideMenu} style={{color: location.pathname === value.to ?"#FDC232":"" ,display:'flex',alignItems:'center',justifyContent:'flex-start',width:'210px'}}  to={value.to}>{value.title.toUpperCase()}
                        </Link>
                     
                    </div>
                })
            }
                </div>
            </div>
            <div className={pelayanMenu?"sideMenuPelayanan":"sideMenuPelayanan inactive"}>
                <div className="sideMenuList">
                <div style={{width:'21px',height:'20.5px'}} className="link-Container">
                    <HiArrowNarrowLeft size="large" onClick={()=>SetPelayananMenu(false)} />
                </div>
                {
                pelayanContent.map((value,index)=>{
                  return  <div className='link-Container'   >
                        <Link onClick={onChangeRouteSideMenu} style={{ color: location.pathname === value.to ?"#FDC232":"" ,display:'flex',alignItems:'center',justifyContent:'flex-start',width:'210px'}}  to={value.to}>{value.title.toUpperCase()}
                        </Link>
                     
                    </div>
                })
            }
                </div>
            </div>
                </div>
   
            </div>
            <div className="slidingSocialMedia">
            <img src={Linkedin} style={{width:'16px',height:'16px',marginRight:'14px'}}/>
            <img src={Yt} style={{width:'23px',height:'16px',marginRight:'14px'}}/>
            <img onClick={()=>window.location = 'https://www.instagram.com/heavyequipmentcentre'}   src={Instagram} style={{width:'16px',height:'16px',marginRight:'14px',cursor:'pointer'}}/>
            <img  onClick={()=> window.location = 'https://www.facebook.com/profile.php?id=100075861904489'}  src={Fb} style={{width:'16px',height:'16px'}}/>
          </div>
        </div>
    )
}

export default SlidingMenu
