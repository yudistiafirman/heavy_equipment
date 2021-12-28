import React from 'react'
import EmailLogo from './assets/emailLogo.png'
const NavbarEmailInfo = () => {
    return (
        <a href='mailto:hequipmentcentre@gmail.com' className='emailInformation phoneInformation'>
            <div>
                <img className='phoneLogo' src={EmailLogo} alt="" />
            </div>
        <div>hequipmentcentre@gmail.com</div>
      </a>
    )
}

export default NavbarEmailInfo
