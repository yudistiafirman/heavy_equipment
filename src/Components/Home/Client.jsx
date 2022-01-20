import React from 'react'

const Client = () => {
    const logo = []
    return (
        <div className='clientContainer'>
            {
                logo.map((v,i)=>{
                    return    <div key={i} style={{marginLeft:i===0?'20px':'0px'}} className="logo">
                          
                    </div>
                })
            }
         
        </div>
    )
}

export default Client
