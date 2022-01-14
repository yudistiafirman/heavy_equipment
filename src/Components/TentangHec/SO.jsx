import React from 'react'
import { Link} from 'react-router-dom'
import J3 from '../Home/assets/J3.jpg'
import So from './assets/SO.png'
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
        <div style={{flexDirection:'column'}} className='latarContentContainer'>
          <div style={{width:'97vw',marginBottom:'30px'}}>
          <div className='latarTitle'>Struktur Organisasi Perusahaan</div>
                <img alt='#' width="90%" className='strukturPict' src={So} style={{borderRadius:'4px'}} />
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
