import React from 'react'
import { a } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import HecLogo from './assets/heclogo.png'
import MenuList from './MenuList'
import './Navbar.css'
import NavbarEmailInfo from './NavbarEmailInfo'
import NavbarPhoneInfo from './NavbarPhoneInfo'
import TentangHec from '../TentangHec/TentangHec'
import PelayananKami from '../PelayananKami/PelayananKami'

const Navbar = () => {
  const [isIdPressed, SetIsIdPress] = useState(true)
  const [tentangKami,SetTentangKami]=useState(false)
  const [pelayanKami,SetPelayanKami]=useState(false)

  const onLeaveNav =()=>{
    SetTentangKami(false)
    SetPelayanKami(false)
  }

  return (
    <div className='navbar'>
      <div className='header'>
        <div>
          <img src={HecLogo} className='imageLogo' />
        </div>

        <div
          style={{
            display: 'flex',
            margin: '39px 0px 44px 0px',
            alignItems: 'center'
          }}
        >
          <div className='contactInformation'>
            <div className='callMe'>Hubungi Sekarang</div>
            <div className='phoneAndEmail'>
              <NavbarPhoneInfo />
              <NavbarEmailInfo />
            </div>
          </div>

          <div className='contactSeparator' />
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
    </div>
  )
}

export default Navbar
