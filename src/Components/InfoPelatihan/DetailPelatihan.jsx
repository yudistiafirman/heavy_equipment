import React from 'react'
import './Info.css'
import { FaShareAlt }from 'react-icons/fa'
import CheckIcon from './assets/iconCheck.png'
const DetailPelatihan = () => {
    return (
        <div className='detailPelatihanContainer'>
            <div className="detailInnerContainer">
                <div className="routingDetail">
                    <div className="routingInActive">Home</div>
                    <div className="routingInActive">/</div>
                    <div className="routingInActive">Info Pelatihan</div>
                    <div className="routingInActive">/</div>
                    <div style={{color:'#000000'}} className="routingInActive">Judul Pelatihan Populer 1</div>
                </div>
         
            <div className="detailContentContainer">
            <div className="detailTitleContainer">
                <div className="detailTitle">
                Judul Pelatihan Populer 1
                </div>
               <div className="titleIconContainer">
                   <FaShareAlt/>
               </div>
            </div>
            <div className="titleCategory">
                <div>Sertifikasi</div>
            </div>
            <div className="detailImage">

            </div>
            <div className="detailDesc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus
            </div>
            <div className="advantagesPelatihanContainer">
                <div className="advantagesPelatihanInnerContainer">
                    <div className='nilaiPlusContainer'>
                        <div className="nilaiPlustitle">
                                Nilai Plus Pelatihan HEC
                        </div>
                        <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px'}}/>
                            <div className="checkDesc">Waktu Belajar fleksible</div>
                        </div>
                        <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px'}}/>
                            <div className="checkDesc">Menggunakan Pengajar Professional</div>
                        </div>
                        <div className="checkListContainer">
                            <img src={CheckIcon} style={{width:'16px',height:'16px',marginLeft:'7px'}}/>
                            <div className="checkDesc">Adaptif dengan penerapan lapangan</div>
                        </div>
                    </div>
                    <div className="bestOffer">
                        <div className="bestOfferTitle">Dapatkan Penawaran Terbaik</div>
                        <div className="hubungiBtn">
                            <div className="hubungiBtnTitle">HUBUNGI KAMI</div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
           
            </div>
            <div className="lihatPelatihanPopular">
            <div className="lihatPelatihanInnerContainer">
                <div className="latarTitle">Pelatihan Lainnya</div>
                <div className="lihatPelatihanContent">Judul Pelatihan Popular  1</div>
                <div className="lihatPelatihanContent">Judul Pelatihan Popular  2</div>
                <div className="lihatPelatihanContent">Judul Pelatihan Popular  3</div>
                <div className="lihatPelatihanContent">Judul Pelatihan Popular  4</div>
            </div>
                </div>
        </div>
    )
}

export default DetailPelatihan
