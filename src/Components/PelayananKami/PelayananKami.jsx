import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import './Pelayanan.css'

const PelayananKami = ({onPressDropDownPelayanan}) => {
    const location = useLocation()
    const pelayanContent=[
        {
            title:'Program Pendidikan dan Pelatihan',
            to:'/program'
        },
        {
            title:'Labour Supply',
            to:'/labour'
        },
        {
            title:'Konsultan',
            to:'/konsultan'
        },
        {
            title:'Penjualan SparePart Alat Berat',
            to:'/penjualan'
        },
        {
            title:'Jasa Service Alat Berat',
            to:'/jasa'
        }
    ]
    return (
        <div  onMouseEnter={()=>onPressDropDownPelayanan(true)} onMouseLeave={()=>onPressDropDownPelayanan(false)} className='pelayananContainer'>
            {
                pelayanContent.map((v,i)=>{
                    return <div  onClick={()=>onPressDropDownPelayanan(false)}  className="pelayanList">
                    <Link style={{color: location.pathname === v.to ?"#FDC232":""}}  to={v.to}>{v.title.toUpperCase()}</Link>
                </div>
                })
            }
         
        </div>
    )
}

export default PelayananKami
