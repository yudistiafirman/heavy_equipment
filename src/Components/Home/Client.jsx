import React from 'react'
import Pertamina from './assets/pertamina.png'
import Agung from './assets/agungLogo.png'
import Shell from './assets/shellLogo.png'
import UT from './assets/UtLogo.png'
const Client = () => {
    const logo = [Pertamina,Agung,Shell,UT]
    return (
        <div className='clientContainer'>
            {
                logo.map((v,i)=>{
                    return    <div className="logo">
                          
                    </div>
                })
            }
         
        </div>
    )
}

export default Client
