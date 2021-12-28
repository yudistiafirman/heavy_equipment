import React from 'react'
import './footer.css'
import HecLogoBnW from './assets/hecLogoBnW.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='footerInfo'>
          <div className='hecFooter'>PT. Heavy Equipment Centre</div>
          <div className='hecAddress'>
            Jl. Soekarno Hatta No 633A, Sukapura, Kiaracondong, Bandung, Jawa
            Barat 40285
          </div>
          <div className='hecAddress' style={{ marginBottom: '0px' }}>
            Phone +62 8112131122 | Email hequipmentcentre@gmail.com
          </div>
        </div>
        <div className="footerLogo">
            <img style={{width:'173px',height:'72px'}} src={HecLogoBnW}/>
        </div>
      </div>
      <div className="copyRights">
      ©2021 PT. Heavy Equipment Centre, all rights reserved     |     Development by FM
      </div>
    </div>
  )
}

export default Footer
