import React from 'react'
import { Link } from 'react-router-dom'
import './Pelayanan.css'

const PelayananKami = ({onPressDropDownPelayanan}) => {
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
                    <Link onClick={()=>window.scrollTo(0)}  to={v.to}>{v.title.toUpperCase()}</Link>
                </div>
                })
            }
         
        </div>
    )
}

export default PelayananKami
