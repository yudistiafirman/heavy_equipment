import React from 'react'
import { useState } from 'react/cjs/react.development'
import { AiFillReconciliation, AiOutlineMediumWorkmark } from "react-icons/ai";
import { MdEngineering,MdOutlineSupervisedUserCircle,MdHandyman,MdHomeRepairService} from "react-icons/md";
const OurServices = () => {
    const [cardIdx,setCardContentIdx]=useState(0)
    const servicesCardContent=[
        {
            icon:<AiFillReconciliation size="50%" color="#ffffff" />,
            title:'Program Pendidikan Pelatihan',
            description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
        },
        {
            icon:<MdEngineering size="50%" color="#ffffff" /> ,
            title:'Labour Supply',
            description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
        },
        {
            icon:<MdOutlineSupervisedUserCircle size="50%" color="#ffffff" />  ,
            title:'Konsultan',
            description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
        },
        {
            icon:<MdHandyman size="50%" color="#ffffff" /> ,
            title:'Sparepart Alat Berat',
            description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
        },
        {
            icon:<MdHomeRepairService size="50%" color="#ffffff" /> ,
            title:'Service Alat Berat',
            description:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.'
        }
            
    ]


    return (
        <div>
            <div className="servicesTitle">
                <div className="marginSeparator"/>
                    <div className="titleContainer">
                        <div className="titleForYou">
                            Layanan kami untuk anda
                        </div>
                        <p className="forYouDesc">
                        Berbagai perusahaan mempercayakan sumber dayanya pada pelatihan-pelatihan esensial kami
                        </p>
                    </div>
               
            </div>

            <div className="ourServicesCardContainer">
                {
                    servicesCardContent.map((v,i)=>{
                        return <div key={i} style={{marginRight:i === 2 && '0px'}} style={{borderRadius:cardIdx === i?'10px':'',boxShadow:cardIdx === i?'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px':'',backgroundColor:cardIdx === i?'#FFFFFF':'#E5E5E5'}} onMouseEnter={()=>setCardContentIdx(i)} className="servicesCard ">
                            <div className="servicesCardInner">
                                <div className="iconContainer">
                                    {v.icon}
                                </div>
                                <p style={{color:cardIdx === i?'#FDC232':'#071244'}} className="servicesCardTitle">{v.title}</p>
                                <p className="servicesCardDesc">{v.description}</p>
                            </div>
                        </div>
                    })
                }
                    
            </div>
        </div>
    )
}

export default OurServices
