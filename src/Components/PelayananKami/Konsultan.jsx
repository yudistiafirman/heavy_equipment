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
                
                <div className='heroOrangeText'>KONSULTAN</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Layanan Konsultan</div>
          <div style={{marginBottom:'20px',textAlign:'justify',width:'95.5%'}} className='latarContent'>
          Sebagai perusahaan yang bergerak dibidang alat berat, kami menyediakan layanan konsultan untuk kebutuhan anda sesuai dengan informasi dibawah ini.
          </div>
          <ol style={{paddingLeft:'14px'}}  className='latarContent'>
            <li> AUDIT EXTERNAL MAINTENANCE MANAGEMENT </li>
            <li> CREATE SYSTEM MAINTENANCE MANAGEMENT </li>
            <li> TROUBLESHOOTING UNIT ALAT BERAT </li>
            <li> DEVELOPMENT SYSTEM MECHANIC </li>
            <li> DEVELOPMENT SYSTEM OPERATOR </li>
          </ol>
      
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <Link  to='/program' className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
            </Link>
            <Link  to='/labour' className='lihatJugaContent'>
              Labour Supply
            </Link>
            <Link  to='/penjualan' className='lihatJugaContent'>
             Penjualan Sparepart dan Alat Berat
            </Link>
            <Link  to='/jasa' className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Konsultan
