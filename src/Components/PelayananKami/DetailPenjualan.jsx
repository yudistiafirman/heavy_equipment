import React from 'react'
import { FaShareAlt }from 'react-icons/fa'
import J1 from '../Home/assets/J1.jpg'
import J2 from '../Home/assets/J2.jpg'
import J3 from '../Home/assets/J3.jpg'
import J4 from '../Home/assets/J4.jpg'
import PhotoGrid from '../Home/PhotoGrid'
import { useNavigate } from 'react-router-dom';
const DetailPenjualan = () => {
    const navigate = useNavigate()
    const images =[J1,J2,J3,J4,J1]
    return (
        <div className='detailPelatihanContainer'>
            <div className="detailInnerContainer">
                <div style={{width:'60%'}} className="routingDetail">
                    <div onClick={()=> navigate('/')}  className="routingInActive">Home</div>
                    <div className="routingInActive">/</div>
                    <div onClick={()=> navigate('/penjualan')}  className="routingInActive">Penjualan Sparepart Alat Berat</div>
                    <div className="routingInActive">/</div>
                    <div style={{color:'#000000'}} className="routingInActive">Nama alat berat 1</div>
                </div>
         
            <div className="detailContentContainer">
            <div className="detailTitleContainer">
                <div className="detailTitle">
                Nama Alat Berat 1
                </div>
               <div className="titleIconContainer">
                   <FaShareAlt/>
               </div>
            </div>
                <div style={{marginBottom:'40px'}}>
                <PhotoGrid images={images}/>
    
                </div>
             
            <div className="detailDesc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus
            </div>
            <div style={{width:'100%'}} className="hubungiBtn">
                            <div className="hubungiBtnTitle">HUBUNGI KAMI</div>
                        </div>
            </div>
           
            </div>
            <div style={{marginTop:'40px'}} className="lihatJuga">
            <div className="lihatJugaTitle">Lihat Juga</div>
            <div onClick={()=> navigate('/penjualan')}  className="lihatJugaContent">Nama alat berat 1</div>
            <div onClick={()=> navigate('/penjualan')}  className="lihatJugaContent">Nama alat berat 2</div>
            <div onClick={()=> navigate('/penjualan')}  className="lihatJugaContent">Nama alat berat 3</div>
        </div>
        </div>
    )
}

export default DetailPenjualan
