import React from 'react'
import EmailLogo from './assets/emailLogo.png'
import {AiOutlineMail} from 'react-icons/ai'
const NavbarEmailInfo = () => {
    return (
        <a href='mailto:hequipmentcentre@gmail.com' className='emailInformation phoneInformation'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'10px',height:'10px',marginRight:'5px'}}>
                <AiOutlineMail/>
            </div>
        <div>hequipmentcentre@gmail.com</div>
      </a>
    )
}

export default NavbarEmailInfo
