import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PenjualanPict from './assets/penjualan.jpg'
const Penjualan = () => {
    let navigate = useNavigate()
    const [cardIdx,setCardContentIdx]=useState(0)
    const penjualanContent=[
      {
        icon:'',
        title:'Nama Alat Berat 1',
        description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
    },
    {
      icon:'',
      title:'Nama Alat Berat 2',
      description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
  },
  {
    icon:'',
    title:'Nama Alat Berat 3',
    description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
},
{
  icon:'',
  title:'Nama Alat Berat 4',
  description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
},
    ]
    return (
      <div className='latarContainer'>
        <div className='jumbotron'>
          <img
            height='442px'
            style={{ resize: 'horizontal', overflow: 'auto' }}
            width='100%'
            src={PenjualanPict}
          />
        </div>
        <div className='campaign'>
          <div className='textWithBtn'>
            <div className='heroMediumText'>Penjualan Sparepart</div>
            <div className='heroOrangeText'>Alat Berat</div>
          </div>
        </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Penjualan Sparepart</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          Menjadi perusahaan jasa layanan support alat berat yang professional dan synergi dengan customer di seluruh Indonesia.
          </div>
          <div style={{height:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                {
                    penjualanContent.map((v,i)=>{
                        return <div key={i} style={{marginRight:i === 2 && '0px'}} style={{borderRadius:cardIdx === i?'10px':'',boxShadow:cardIdx === i?'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px':'',backgroundColor:cardIdx === i?'#FFFFFF':'#E5E5E5'}} onMouseEnter={()=>setCardContentIdx(i)} className="penjualanCard ">
                            <div className="penjualanCardInner">
                                <div className="iconContainer">
                                    {v.icon}
                                </div>
                                <p style={{color:cardIdx === i?'#FDC232':'#071244'}} className="servicesCardTitle">{v.title}</p>
                                <p className="servicesCardDesc">{v.description}</p>
                                <div style={{display:'flex',justifyContent:'flex-end'}}>
                                <div className="lihatDetailPelayananCard">
                                  <div className='lihatDetailDesc'>Lihat Detail</div>
                                </div>
                                </div>
                               
                            </div>
                        </div>
                    })
                }
                    
            </div>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <div onClick={() => navigate('/program')} className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
            </div>
            <div onClick={() => navigate('/konsultan')} className='lihatJugaContent'>
              Konsultan
            </div>
            <div onClick={() => navigate('/labour')} className='lihatJugaContent'>
             Labour Supply
            </div>
            <div onClick={() => navigate('/jasa')} className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </div>
          </div>
        </div>
      </div>
    )
}

export default Penjualan
