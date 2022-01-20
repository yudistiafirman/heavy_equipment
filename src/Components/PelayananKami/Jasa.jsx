import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import JasaPict from './assets/jasa.jpg'
import axios from 'axios'
import { apiUrl } from '../../Default';
import { cardDescSlicer, cardTitleSlicer } from '../utils/funcHelper';
const Jasa = () => {
    let navigate = useNavigate()
    const [cardIdx,setCardContentIdx]=useState(0)
    const [jasaContent,setJasaContent]=useState([])
    

    useEffect(()=>{
      getAllJasa()
    },[])

    const getAllJasa=()=>{
      axios.get(`${apiUrl}/jasa/all?`).then(response => {
        setJasaContent(response.data.data)
      })
    }
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
                <div className='heroMediumText'>JASA SERVIS</div>
                <div className='heroOrangeText'>ALAT BERAT</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Jasa Servis Alat Berat</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          Menjadi perusahaan jasa layanan support alat berat yang professional dan synergi dengan customer di seluruh Indonesia.
          </div>
          <div className='penjualanDanServiceList'>
                {
                   jasaContent.length > 0 && jasaContent.map((v,i)=>{
                        return <div key={i} style={{borderRadius:'10px',boxShadow:cardIdx === i?'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px':'',backgroundColor:'#FFFFFF',marginRight:'10px',marginBottom:'10px'}} onMouseEnter={()=>setCardContentIdx(i)} className="penjualanCard ">
                            <div className="penjualanCardInner">
                                <div style={{width:'48px',height:'48px',backgroundColor:'#071243',borderRadius:'10px'}}>
                                    {v.icon}
                                </div>
                                <p style={{color:cardIdx === i?'#FDC232':'#071244'}} className="servicesCardTitle">{cardTitleSlicer(v.title)}</p>
                                <p className="servicesCardDesc">{cardDescSlicer(v.descriptions)}</p>
                                <div style={{display:'flex',justifyContent:'flex-end'}}>
                                <div className="lihatDetailPelayananCard">
                                  <div  onClick={()=>navigate('/jasa/detailJasa/'+v.id+'/'+v.title)}  className='lihatDetailDesc'>Lihat Detail</div>
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
            <Link  to='/penjualan' className='lihatJugaContent'>
              Penjualan Sparepart Alat Berat
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Jasa
