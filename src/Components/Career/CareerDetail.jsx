import React, { useEffect, useState } from 'react'
import { FaShareAlt }from 'react-icons/fa'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'
import {apiUrl} from '../../Default'
import moment from 'moment'

const CareerDetail = () => {

    const {id,name}=useParams()
    const navigate=useNavigate()
    const [pekerjaanDetail,setPekerjaanDetail]=useState([])

    useEffect(()=>{
        getVacanciesDetail()
    },[id,name])
    const getVacanciesDetail =()=>{
        axios.get(`${apiUrl}/vacancies/detail?id=${id}`).then((response)=>{
            setPekerjaanDetail(response.data.data)
        })
    }
    return pekerjaanDetail.length > 0 &&  (
        <div className='detailPelatihanContainer'>
                        <div className="detailInnerContainer">
                <div className="routingDetail">
                    <div  onClick={()=>navigate('/')}  className="routingInActive">Home</div>
                    <div className="routingInActive">/</div>
                    <div onClick={()=>navigate('/career')} className="routingInActive">Karir</div>
                    <div className="routingInActive">/</div>
                    <div style={{color:'#000000'}} className="routingInActive">{name}</div>
                </div>
         
            <div className="detailContentContainer">
            <div className="detailTitleContainer">
                <div className="detailTitle">
                {pekerjaanDetail[0].job_name}
                </div>
               <div className="titleIconContainer">
               <CopyToClipboard onCopy={()=>alert('Success Copy to Clipboard')} text={window.location.href}>
                   <FaShareAlt/>
                   </CopyToClipboard>
               </div>
         
            </div>
            <div   style={{width:'30%'}} className="titleCategory">
                <div>       {`akhir pengiriman cv tanggal ${moment(pekerjaanDetail[0].last_submission).format('Do MMMM YYYY')}`}</div>
            </div>
            <div className="detailDesc">
            {pekerjaanDetail[0].job_description}
            </div>
            <div className="advantagesPelatihanContainer">
                <div className="advantagesPelatihanInnerContainer">
                    <div className='nilaiPlusContainer'>
                        <div className="nilaiPlustitle">
                                Kualifikasi
                        </div>
                        {
                            pekerjaanDetail[0].qualifications[0].qualifications_1 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_1 }</div>
                        </div>
                        }
                            {
                            pekerjaanDetail[0].qualifications[0].qualifications_2 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_2 }</div>
                        </div>
                        }
                        {
                            pekerjaanDetail[0].qualifications[0].qualifications_3 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_3 }</div>
                        </div>
                        }
                            {
                            pekerjaanDetail[0].qualifications[0].qualifications_4 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_4 }</div>
                        </div>
                        }
                           {
                            pekerjaanDetail[0].qualifications[0].qualifications_5 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_5 }</div>
                        </div>
                        }
                           {
                            pekerjaanDetail[0].qualifications[0].qualifications_6 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_6 }</div>
                        </div>
                        }
                          {
                            pekerjaanDetail[0].qualifications[0].qualifications_7 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_7 }</div>
                        </div>
                        }
                           {
                            pekerjaanDetail[0].qualifications[0].qualifications_8 &&     <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">{pekerjaanDetail[0].qualifications[0].qualifications_8 }</div>
                        </div>
                        }
                    
                        <div className="checkDesc">Jangan lupa untuk melampirkan CV terbaru anda dan rekrutmen ini tanpa dipungut biaya sepeserpun</div>
                    </div>
                    <div className="bestOffer">
                        <div  className="hubungiBtn">
                            <a href='mailto:hequipmentcentre@gmail.com' className="hubungiBtnTitle">Lamar Sekarang</a>
                        </div>
                    </div>
                </div>

            </div>
            </div>
           
            </div>
        </div>
    )
}

export default CareerDetail
