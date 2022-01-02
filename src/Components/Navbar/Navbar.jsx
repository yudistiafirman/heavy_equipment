import React,{useState,useContext, useLayoutEffect, useEffect} from 'react'
import { a } from 'react-router-dom'
import HecLogo from './assets/hec.png'
import MenuList from './MenuList'
import './Navbar.css'
import NavbarEmailInfo from './NavbarEmailInfo'
import NavbarPhoneInfo from './NavbarPhoneInfo'
import TentangHec from '../TentangHec/TentangHec'
import PelayananKami from '../PelayananKami/PelayananKami'
import {FaBars,FaPhoneAlt,FaRegEnvelope} from 'react-icons/fa'
import { MenuContext } from "react-flexible-sliding-menu";
import Backdrop from '@mui/material/Backdrop';
import Fb from './assets/facebook.png'
import Yt from './assets/youtube.png'
import Linkedin from './assets/linkedin.png'
import Instagram from './assets/instagram.png'
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Navbar = () => {
  const [isIdPressed, SetIsIdPress] = useState(true)
  const [tentangKami,SetTentangKami]=useState(false)
  const [pelayanKami,SetPelayanKami]=useState(false)
  const { openMenu,closeMenu } = useContext(MenuContext);
  const [openBackDrop,SetOpenBackDrop]= useState(false)
  const [width,height]=useWindowSize()
  const onLeaveNav =()=>{
    SetTentangKami(false)
    SetPelayanKami(false)
  }

useEffect(()=>{
  if(width >= 969){
    closeMenu()
    SetOpenBackDrop(false)
  }
},[width])

const handleClose=()=>{
  closeMenu()
  SetOpenBackDrop(false)
}

const handleSlide =()=>{
  openMenu()
  SetOpenBackDrop(true)
}
  return (
    <div className='navbar'>
      <div className='header'>
     
        
     
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <FaBars size="large" className='hamburgerMenu' onClick={handleSlide} color='#000000' />
          <img src={HecLogo} className='imageLogo' />
       
        </div>

        <div
          className='navbarInfoContainer'
        >
          <div className='contactInformation'>
            <div className='callMe'>Hubungi Sekarang</div>
            <div className='phoneAndEmail'>
              <NavbarPhoneInfo />
              <NavbarEmailInfo />
            </div>
          </div>

       

          <div className='contactSeparator' />
          <div style={{height:'100px',alignSelf:'center'}}>
          <div className='transBtn'>
            <span
              onClick={() => SetIsIdPress(!isIdPressed)}
              style={{
                backgroundColor: isIdPressed ? '#071243' : '#ffffff',
                color: isIdPressed ? '#ffffff' : '#071243'
              }}
              className='translate'
            >
              ID
            </span>
            <span
              onClick={() => SetIsIdPress(!isIdPressed)}
              style={{
                backgroundColor: isIdPressed ? '#ffffff' : '#071243',
                color: isIdPressed ? '#071243' : '#ffffff'
              }}
              className='translate'
            >
              EN
            </span>
          </div>
          <div className="socialMedia">
            <img alt='#' src={Linkedin} style={{width:'16px',height:'16px',marginRight:'14px'}}/>
            <img alt='#'  src={Yt} style={{width:'23px',height:'16px',marginRight:'14px'}}/>
            <img alt='#'  src={Instagram} style={{width:'16px',height:'16px',marginRight:'14px',cursor:'pointer'}}/>
            <img alt='#' src={Fb} style={{width:'16px',height:'16px',cursor:'pointer'}}/>
          </div>
          </div>
      
        </div>
        <div className="mobileInfoContainer">
          <a style={{marginRight:'21px'}} href="tel:+68112131122">
          <FaPhoneAlt  color="#000000"/>
          </a>
          <a href="mailto:hequipmentcentre@gmail.com">
          <FaRegEnvelope color="#000000"/>
          </a>
         
            
          </div>
      </div>
      <nav onMouseLeave={onLeaveNav} className='navigation'>
        <MenuList onPressDropDownPelayanan={SetPelayanKami} onPressDropDownTentang={SetTentangKami} />
      </nav>
      {
        tentangKami &&     <TentangHec onPressDropDownTentang={SetTentangKami}/>
      }
      {
        pelayanKami &&   <PelayananKami onPressDropDownPelayanan={SetPelayanKami}  />
      }
      <Backdrop open={openBackDrop} onClick={handleClose}/>
    </div>
  )
}

export default Navbar
