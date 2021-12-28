import React from 'react'
import J3 from '../Home/assets/J3.jpg'
import { useNavigate } from 'react-router-dom'
import NilaiPict from './assets/nilai.png'
const NilaiInti = () => {
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
            <div className='heroMediumText'>Nilai</div>
            <div className='heroOrangeText'>Inti</div>
          </div>
        </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Nilai Inti Perusahaan</div>
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
            <div onClick={() => navigate('/so')} className='lihatJugaContent'>
              Struktur Organisasi
            </div>
          </div>
        </div>
      </div>
    )
}

export default NilaiInti
