import React from 'react'
import prima from './assets/prima.jpg'
import putra from './assets/putra.jpg'
const Client = () => {
    const logo = [prima,putra]
    return (
        <div className='clientContainer'>
            {
                logo.map((v,i)=>{
                    return    <div key={i}    style={{
                        backgroundImage:`url(${v})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}  className="logo">
        
                    </div>
                })
            }
         
        </div>
    )
}

export default Client
