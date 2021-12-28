import React from 'react'
import J1 from '../Home/assets/J1.jpg'
import { useNavigate } from "react-router-dom";
const LatarBelakang = () => {
    let navigate = useNavigate();
  return (
    <div className='latarContainer'>
      <div className='jumbotron'>
        <img
          height='442px'
          style={{ resize: 'horizontal', overflow: 'auto' }}
          width='100%'
          src={J1}
        />
      </div>
      <div className='campaign'>
        <div className='textWithBtn'>
          <div className='heroMediumText'>Latar</div>
          <div className='heroOrangeText'>Belakang</div>
        </div>
      </div>
      <div className='latarContentContainer'>
        <div className='latarContentDesc'>
          <div className='latarTitle'>Latar Belakang Perusahaan</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
            Saat ini dunia industri pertambangan, agro, konstruksi maupun
            forestry khususnya di indonesia semakin berkembang, dengan
            perkembangan tersebut alat berat di indonesia semakin banyak. Oleh
            karena itu perusahaan – perusahaan yang memiliki unit alat berat
            memerlukan sumber daya manusia yang memiliki kompetensi terhadap
            pemeliharaan dan pengoperasian alat berat serta memerlukan
            management pemeliharaan alat berat yang baik. Dalam perkembangan
            kompetensi dan management pemeliharaan alat berat ini masih banyak
            perusahaan yang belum memiliki Wadah pelatihan untuk meningkatkan
            kompetensi SDM tersebut dan belum memiliki konsep management
            pemeliharaan alat berat yang baik. HEAVY EQUIPMENT CENTRE (HEC)
            adalah Perusahaan bergerak di bidang jasa layanan support Alat
            Berat. Adapun layanan yang kami berikan adalah :
          </div>
          <div className='latarContent'>
            1. Pelatihan Kompetensi Alat Berat (Mekanik, Operator dan Staff
            Maintenance)
          </div>
          <div className='latarContent'>
            2. Penyedia Jasa Labour Supply Alat Berat (Mekanik dan Operator)
          </div>
          <div className='latarContent'>
            3. Konsultan Maintenance Alat Berat
          </div>
          <div className='latarContent'>
            4. Penyediaan Spare Part Alat Berat
          </div>
          <div className='latarContent'>5. Pelayanan Service Alat Berat</div>
        </div>
        <div className="lihatJuga">
            <div className="lihatJugaTitle">Lihat Juga</div>
            <div onClick={()=>navigate('/visi')} className="lihatJugaContent">Visi Misi</div>
            <div onClick={()=>navigate('/nilai')} className="lihatJugaContent">Nilai Inti</div>
            <div onClick={()=>navigate('/so')} className="lihatJugaContent">Struktur Organisasi</div>
        </div>
      </div>
    </div>
  )
}

export default LatarBelakang
