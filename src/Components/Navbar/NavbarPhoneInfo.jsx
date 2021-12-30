import React from 'react'
import PhoneLogo from './assets/phonelogo.png'
const NavbarPhoneInfo = () => {
    return (
        <a href='tel:+68112131122' className='phoneInformation'>
              <div>
                    <img className='phoneLogo' src={PhoneLogo} alt="" />
             </div>
        <div>+628112131122</div>
      </a>
    )
}

export default NavbarPhoneInfo
