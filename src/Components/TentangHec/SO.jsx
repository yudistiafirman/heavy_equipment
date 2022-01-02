import React from 'react'
import { Link} from 'react-router-dom'
import J3 from '../Home/assets/J3.jpg'
import NilaiPict from './assets/nilai.png'
const SO = () => {
    return (
      <div className='latarContainer'>
      
      <div 
            style={{
              backgroundImage:`url(${J3})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Struktur</div>
                <div className='heroOrangeText'>Organisasi</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Struktur Organisasi Perusahaan</div>
                <img alt='#' src={NilaiPict} width="90%"/>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <Link onClick={() => window.scrollTo(0)} to='/latar' className='lihatJugaContent'>
              Latar Belakang
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/misi' className='lihatJugaContent'>
              Visi  Misi
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/nilai' className='lihatJugaContent'>
              Nilai Inti
            </Link>
          </div>
        </div>
      </div>
    )
}

export default SO
