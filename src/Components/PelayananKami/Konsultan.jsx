import React from 'react'
import { Link} from "react-router-dom";
import Konsul from './assets/konsul.jpg'
const Konsultan = () => {
    return (
      <div className='latarContainer'>
            <div 
            style={{
              backgroundImage:`url(${Konsul})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                
                <div className='heroOrangeText'>Konsultan</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Layanan Konsultan</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          Sebagai perusahaan yang bergerak dibidang konstruksi, kami menyediakan layanan konsultan untuk kebutuhan anda. Untuk lebih jelasnya anda dapat langsung menghubungi kami melalui telepon <a href='tel:+628112131122' style={{color:'blue',borderBottom:'1px solid blue'}}>+628112131122</a> atau melalui email di <a href='mailto:hequipmentcentre@gmail.com' style={{color:'blue',borderBottom:'1px solid blue'}}>hecequipmentcentre@gmail.com</a>
          </div>
      
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <Link onClick={() => window.scrollTo(0)} to='/program' className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/labour' className='lihatJugaContent'>
              Labour Supply
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/penjualan' className='lihatJugaContent'>
             Penjualan Sparepart dan Alat Berat
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/jasa' className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Konsultan
