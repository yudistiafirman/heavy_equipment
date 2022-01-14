import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import JasaPict from './assets/jasa.jpg'
const Jasa = () => {
    let navigate = useNavigate()
    const [cardIdx,setCardContentIdx]=useState(0)
    const jasaContent=[
      {
        icon:'',
        title:'Jasa Servis Alat Berat 1',
        description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
    },
    {
      icon:'',
      title:'Jasa Servis Alat Berat 2',
      description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
  },
  {
    icon:'',
    title:'Jasa Servis Berat 3',
    description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
},
{
  icon:'',
  title:'Jasa Servis Berat 4',
  description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
},
    ]
    return (
      <div className='latarContainer'>
                  <div 
            style={{
              backgroundImage:`url(${JasaPict})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Jasa Servis</div>
                <div className='heroOrangeText'>Alat Berat</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Jasa Servis Alat Berat</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          Sebagai perusahaan jasa layanan support alat berat yang professional dan synergi dengan customer di seluruh Indonesia.kami menyediakan service alat berat sebagai berikut 
          </div>
          <ol style={{paddingLeft:'14px'}}  className='latarContent'>
            <li> SERVICE UNIT ALAT BERAT </li>
            <li> OVERHAULE KOMPONEN </li>
            <li> TROUBLESHOOTING </li>
            <li> INSTALL SAFETY DEVICE </li>
          </ol>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <Link onClick={() => window.scrollTo(0)} to='/program' className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/konsultan' className='lihatJugaContent'>
              Konsultan
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/labour' className='lihatJugaContent'>
             Labour Supply
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/penjualan' className='lihatJugaContent'>
              Penjualan Sparepart Alat Berat
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Jasa
