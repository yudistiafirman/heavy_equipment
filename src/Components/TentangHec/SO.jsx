import React from 'react'
import { useNavigate } from 'react-router-dom'
import J3 from '../Home/assets/J3.jpg'
import NilaiPict from './assets/nilai.png'
const SO = () => {
    let navigate = useNavigate()
    return (
      <div className='latarContainer'>
        <div className='jumbotron'>
          <img
            height='442px'
            style={{ resize: 'horizontal', overflow: 'auto' }}
            width='100%'
            src={J3}
          />
        </div>
        <div className='campaign'>
          <div className='textWithBtn'>
            <div className='heroMediumText'>Struktur</div>
            <div className='heroOrangeText'>Organisasi</div>
          </div>
        </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Struktur Organisasi Perusahaan</div>
                <img src={NilaiPict} width="90%"/>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <div onClick={() => navigate('/latar')} className='lihatJugaContent'>
              Latar Belakang
            </div>
            <div onClick={() => navigate('/visi')} className='lihatJugaContent'>
              Visi  Misi
            </div>
            <div onClick={() => navigate('/nilai')} className='lihatJugaContent'>
              Nilai Inti
            </div>
          </div>
        </div>
      </div>
    )
}

export default SO
