import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from '../../Default';
import PenjualanPict from './assets/penjualan.jpg'
import { cardDescSlicer, cardTitleSlicer } from '../utils/funcHelper';
const Penjualan = () => {
    let navigate = useNavigate()
    const [cardIdx,setCardContentIdx]=useState(0)
    const [penjualanContent,setPenjualanContent]=useState([])

  useEffect(()=>{
    getAllPenjualan()
  },[])
   const getAllPenjualan=()=>{
     axios.get(`${apiUrl}/alat/all`).then((response)=>{
       setPenjualanContent(response.data.data)
     })
   }
    return (
      <div className='latarContainer'>
                <div 
            style={{
              backgroundImage:`url(${PenjualanPict})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>PENJUALAN SPAREPART</div>
                <div className='heroOrangeText'>ALAT BERAT</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Penjualan Sparepart</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          Menjadi perusahaan jasa layanan support alat berat yang professional dan synergi dengan customer di seluruh Indonesia.
          </div>
          <div className='penjualanDanServiceList'>
                {
                 penjualanContent.length >0 &&   penjualanContent.map((v,i)=>{
                        return <div key={i} style={{borderRadius:'10px',boxShadow:cardIdx === i?'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px':'',backgroundColor:'#FFFFFF',marginRight:'10px',marginBottom:'10px'}} onMouseEnter={()=>setCardContentIdx(i)}  className="penjualanCard ">
                            <div className="penjualanCardInner">
                                <div style={{width:'48px',height:'48px',backgroundColor:'#071243',borderRadius:'10px'}} className="iconContainer">
                                    {v.icon}
                                </div>
                                <p style={{color:cardIdx === i?'#FDC232':'#071244'}} className="servicesCardTitle">{cardTitleSlicer(v.title_alatberat)}</p>
                                <p className="servicesCardDesc">{cardDescSlicer(v.descriptions_alatberat)}</p>
                                <div style={{display:'flex',justifyContent:'flex-end'}}>
                                <div className="lihatDetailPelayananCard">
                                  <div onClick={()=>navigate('detailPenjualan/'+v.id+'/'+v.title_alatberat)} className='lihatDetailDesc'>Lihat Detail</div>
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
            <Link  to='/program' className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
            </Link>
            <Link  to='/konsultan' className='lihatJugaContent'>
              Konsultan
            </Link>
            <Link  to='/labour' className='lihatJugaContent'>
             Labour Supply
            </Link>
            <Link  to='/jasa' className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Penjualan
