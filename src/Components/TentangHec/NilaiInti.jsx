import React from 'react'
import J3 from '../Home/assets/J3.jpg'
import { Link } from 'react-router-dom'
import NilaiPict from './assets/nilai.png'
const NilaiInti = () => {
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
                <div className='heroMediumText'>Nilai</div>
                <div className='heroOrangeText'>Inti</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Nilai Inti Perusahaan</div>
                <img alt='#' src={NilaiPict} width="90%"/>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <Link onClick={() => window.scrollTo(0)} to='/latar' className='lihatJugaContent'>
              Latar Belakang
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/visi' className='lihatJugaContent'>
              Visi  Misi
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/so' className='lihatJugaContent'>
              Struktur Organisasi
            </Link>
          </div>
        </div>
      </div>
    )
}

export default NilaiInti
