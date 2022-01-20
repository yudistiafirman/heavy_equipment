import React, { useEffect, useMemo, useState } from 'react'
import './Info.css'
import { FaShareAlt }from 'react-icons/fa'
import CheckIcon from './assets/iconCheck.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useParams,useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { apiUrl } from '../../Default';
import moment from 'moment'
import { cardTitleSlicer } from '../utils/funcHelper';
import 'moment/locale/id'
const DetailPelatihan = () => {
    const [pelatihanData,setPelatihanData]=useState([])
    const [pelatihanPopular,setPelatihanPopular]=useState([])
    const {id,name}=useParams()
    const navigate=useNavigate()
    const location =useLocation()
    useEffect(()=>{
        getPelatihanData()
        getPelatihanPopular()
    },[id,name])
    const getPelatihanData=()=>{
        axios.get(`${apiUrl}/pelatihan/detail?id=${id}`).then((response)=>{
            setPelatihanData(response.data.data)
        })
    }
    const getPelatihanPopular =()=>{
        axios.get(`${apiUrl}/pelatihan/popular`).then((response)=>{
          setPelatihanPopular(response.data.data)
        })
      }

    const renderPelatihanPopular=useMemo(()=>{

    },[id,name])
    return pelatihanData.length > 0 && (
        <div className='detailPelatihanContainer'>
            <div className="detailInnerContainer">
                <div className="routingDetail">
                    <div onClick={()=>navigate('/')} className="routingInActive">Home</div>
                    <div   className="routingInActive">/</div>
                    <div onClick={()=>navigate('/infoPelatihan')} className="routingInActive">Info Pelatihan</div>
                    <div className="routingInActive">/</div>
                    <div style={{color:'#000000'}} className="routingInActive">{name}</div>
                </div>
         
            <div className="detailContentContainer">
                {
                    pelatihanData[0].is_full == 1 ? <div style={{marginLeft:'0'}} className='fullbooked'>FULL BOOKED</div>:<div style={{marginLeft:'0'}} className='open'>OPEN</div>
                }
            <div className="detailTitleContainer">
                <div className="detailTitle">
                {pelatihanData[0].name}
                </div>
               <div className="titleIconContainer">
               <CopyToClipboard onCopy={()=>alert('Success Copy to Clipboard')} text={window.location.href}>
                   <FaShareAlt/>
                   </CopyToClipboard>
               </div>
            </div>
            <div style={{minWidth:'20%'}} className="titleCategory">
                <div>{pelatihanData[0].category_name}</div>
            </div>
            <div   style={{width:'30%'}} className="titleCategory">
                <div>       {`${moment(pelatihanData[0].start_date).format('Do MMMM YYYY')} - ${moment(pelatihanData[0].end_date).format('Do MMMM YYYY')}`}</div>
            </div>
            <div className="detailImage">
            <div
            style={{
                              width:'100%',
                              height:'100%',
                            backgroundImage:`url(${apiUrl}/${pelatihanData[0].image})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                            borderRadius:'10px',
                            cursor:'pointer'
                            }}></div>
            </div>
            <div style={{textAlign:'justify'}} className="detailDesc">
            {pelatihanData[0].descriptions}
            </div>
            <div className="advantagesPelatihanContainer">
                <div className="advantagesPelatihanInnerContainer">
                    <div className='nilaiPlusContainer'>
                        <div className="nilaiPlustitle">
                                Nilai Plus Pelatihan HEC
                        </div>
                        {
                            pelatihanData[0].nilaiPlus[0].nilai_1 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}} className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_1}</div>
                        </div>
                        }
                               {
                            pelatihanData[0].nilaiPlus[0].nilai_2 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_2}</div>
                        </div>
                        }
                               {
                            pelatihanData[0].nilaiPlus[0].nilai_3 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_3}</div>
                        </div>
                        }
                               {
                            pelatihanData[0].nilaiPlus[0].nilai_4 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_4}</div>
                        </div>
                        }
                               {
                            pelatihanData[0].nilaiPlus[0].nilai_5 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_5}</div>
                        </div>
                        }
                     
                     {
                            pelatihanData[0].nilaiPlus[0].nilai_6 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_6}</div>
                        </div>
                        }
                             {
                            pelatihanData[0].nilaiPlus[0].nilai_7 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_7}</div>
                        </div>
                        }
                             {
                            pelatihanData[0].nilaiPlus[0].nilai_8 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_8}</div>
                        </div>
                        }
                            {
                            pelatihanData[0].nilaiPlus[0].nilai_9 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_9}</div>
                        </div>
                        }
                              {
                            pelatihanData[0].nilaiPlus[0].nilai_10 &&    <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px',marginRight:'5px'}}/>
                            <div style={{textAlign:'justify'}}  className="checkDesc">{ pelatihanData[0].nilaiPlus[0].nilai_10}</div>
                        </div>
                        }
                    </div>
                    <div className="bestOffer">
                        <div className="bestOfferTitle">Dapatkan Penawaran Terbaik</div>
                        <div className="hubungiBtn">
                            <a href='tel:+68112131122' className="hubungiBtnTitle">HUBUNGI KAMI</a>
                        </div>
                    </div>
                </div>

            </div>
            </div>
           
            </div>
            {
                    pelatihanPopular.length > 0 &&        <div className="lihatPelatihanPopular">
           
                    <div className="lihatPelatihanInnerContainer">
                        
                        <div className="latarTitle">Pelatihan Lainnya</div>
                        {
                            pelatihanPopular.length> 0 && pelatihanPopular.map((v,i)=>{
                                return v.id != id && (
                                    <div onClick={()=>navigate('/infoPelatihan/detailPelatihan/'+v.id+'/'+v.name)}  className="lihatPelatihanContent">{cardTitleSlicer(v.name)}</div>
                                )
                            }) 
                        }
                    </div>
                        </div>
                }
     
        </div>
    )
}

export default DetailPelatihan
