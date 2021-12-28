import React from 'react'
import { useNavigate } from "react-router-dom";
import Konsul from './assets/konsul.jpg'
const Konsultan = () => {
    let navigate = useNavigate()
    return (
      <div className='latarContainer'>
        <div className='jumbotron'>
          <img
            height='442px'
            style={{ resize: 'horizontal', overflow: 'auto' }}
            width='100%'
            src={Konsul}
          />
        </div>
        <div className='campaign'>
          <div className='textWithBtn'>
            <div className='heroOrangeText'>Konsultan</div>
          </div>
        </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Layanan Konsultan</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          Sebagai perusahaan yang bergerak dibidang konstruksi, kami menyediakan layanan konsultan untuk kebutuhan anda. Untuk lebih jelasnya anda dapat langsung menghubungi kami melalui telepon <a href='tel:+628122089655' style={{color:'blue',borderBottom:'1px solid blue'}}>01121311122</a> atau melalui email di <a href='mailto:hequipmentcentre@gmail.com' style={{color:'blue',borderBottom:'1px solid blue'}}>hecequipmentcentre@gmail.com</a>
          </div>
      
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <div onClick={() => navigate('/program')} className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
            </div>
            <div onClick={() => navigate('/labour')} className='lihatJugaContent'>
              Labour Supply
            </div>
            <div onClick={() => navigate('/penjualan')} className='lihatJugaContent'>
             Penjualan Sparepart dan Alat Berat
            </div>
            <div onClick={() => navigate('/jasa')} className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </div>
          </div>
        </div>
      </div>
    )
}

export default Konsultan
