import React from 'react'
import { FaShareAlt }from 'react-icons/fa'
import CheckIcon from '../InfoPelatihan/assets/iconCheck.png'
const CareerDetail = () => {
    return (
        <div className='detailPelatihanContainer'>
                        <div className="detailInnerContainer">
                <div className="routingDetail">
                    <div className="routingInActive">Home</div>
                    <div className="routingInActive">/</div>
                    <div className="routingInActive">Karir</div>
                    <div className="routingInActive">/</div>
                    <div style={{color:'#000000'}} className="routingInActive">Head of Human Resource</div>
                </div>
         
            <div className="detailContentContainer">
            <div className="detailTitleContainer">
                <div className="detailTitle">
                Head of Human Resource
                </div>
               <div className="titleIconContainer">
                   <FaShareAlt/>
               </div>
            </div>
            <div className="detailDesc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus
            </div>
            <div className="advantagesPelatihanContainer">
                <div className="advantagesPelatihanInnerContainer">
                    <div className='nilaiPlusContainer'>
                        <div className="nilaiPlustitle">
                                Kualifikasi
                        </div>
                        <div style={{alignItems:'center'}} className="checkListContainer">
                            <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">Minimal lulusan S1 Ilmu Psikologi</div>
                        </div>
                        <div style={{alignItems:'center'}}  className="checkListContainer">
                        <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">Mampu menguasai minimal 3 bahasa</div>
                        </div>
                        <div style={{alignItems:'center'}}  className="checkListContainer">
                        <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">Update dengan metodologi terbaru dalam human resources</div>
                        </div>
                        <div style={{alignItems:'center'}}  className="checkListContainer">
                        <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">Minimal 5 tahun pengalaman kerja</div>
                        </div>
                        <div style={{alignItems:'center'}}  className="checkListContainer">
                        <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">Mampu menentukan keputusan dalam waktu singkat</div>
                        </div>
                        <div style={{alignItems:'center'}}  className="checkListContainer">
                        <div style={{width:'4px',height:'4px',marginRight:'10px',backgroundColor:'#000000',borderRadius:'100%'}}/>
                            <div className="checkDesc">Objektif dalam melihat masalah</div>
                        </div>
                        <div className="checkDesc">Jangan lupa untuk melampirkan CV terbaru anda dan rekrutmen ini tanpa dipungut biaya sepeserpun</div>
                    </div>
                    <div className="bestOffer">
                        <div style={{width:'244px'}} className="hubungiBtn">
                            <div  className="hubungiBtnTitle">Lamar Sekarang</div>
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
