import React from 'react'
import PhoneLogo from './assets/phonelogo.png'
const NavbarPhoneInfo = () => {
    return (
        <a href='tel:+628122089655' className='phoneInformation'>
              <div>
                    <img className='phoneLogo' src={PhoneLogo} alt="" />
             </div>
        <div>+628122089655</div>
      </a>
    )
}

export default NavbarPhoneInfo
