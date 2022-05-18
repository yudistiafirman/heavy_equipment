import React from 'react'
import prima from './assets/prima.jpg'
import putra from './assets/putra.jpg'
import ricobana from './assets/ricobana.png'
import sany from './assets/sany.png'
import safety from './assets/safety.png'
const Client = () => {
    const logo = [prima,putra,ricobana,sany,safety]
    return (
        <div className='clientContainer'>
            {
                logo.map((v,i)=>{
                    return    <div key={i}    style={{
                        backgroundImage:`url(${v})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}  className="logo">
        
                    </div>
                })
            }
         
        </div>
    )
}

export default Client
