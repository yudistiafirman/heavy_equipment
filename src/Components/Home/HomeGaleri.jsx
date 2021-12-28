import React from 'react'
import Photogrid from "./PhotoGrid"
import J1 from './assets/J1.jpg'
import J2 from './assets/J2.jpg'
import J3 from './assets/J3.jpg'
import J4 from './assets/J4.jpg'
const HomeGaleri = () => {

    const images=[J1,J2,J3,J4,J4,J4]
    return (
        <div className='homeGaleriContainer'>
                <div className='servicesTitle'>
          <div className='marginSeparator' />
          <div className='titleContainer'>
            <div className='titleForYou'>Galeri</div>
            <p className='forYouDesc'>
            Potongan kegiatan-kegiatan terbaik yang kami jadikan memori terbaik
            </p>
          </div>
        </div>
        <div className="galeriGrid">
            <Photogrid images={images}  maxWidth={1200}/>
        </div>
        </div>
    )
}

export default HomeGaleri
