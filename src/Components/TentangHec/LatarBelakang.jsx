import React from 'react'
import J1 from '../Home/assets/J1.jpg'
import { Link } from "react-router-dom";
const LatarBelakang = () => {


    const latarNavigate=[
      {
        title:'Visi Misi',
        to:'/visi'
      },
      {
        title:'Nilai Inti',
        to:'/nilai'
      },
      {
        title:'Struktur Organisasi',
        to:'/visi'
      },
    ]
  return (
    <div className='latarContainer'>
               <div 
            style={{
              backgroundImage:`url(${J1})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Latar</div>
                <div className='heroOrangeText'>Belakang</div>
              </div>
            </div>
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
            {
              latarNavigate.map((value,index)=>{
                return <Link onClick={()=>window.scrollTo(0)} to={value.to} className="lihatJugaContent">{value.title}</Link>
              })
            }
        </div>
      </div>
    </div>
  )
}

export default LatarBelakang
