import React from 'react'
import Client from './Client'
import './Home.css'
import HomeGaleri from './HomeGaleri'
import Jumbotron from './Jumbotron'
import OurServices from './OurServices'
import PelatihanPopuler from './PelatihanPopuler'
const Home = () => {
    return (
        <div className='homeContainer'>
            <section style={{ position:'relative'}}  id='jumbotron'>
                <Jumbotron/>
            </section>
            <section  id='ourServices'>
                 <OurServices/>
            </section>
            <section style={{marginBottom:'257px'}} id='pelatihanPopuler'>
                    <PelatihanPopuler/>
            </section>
            <section style={{marginBottom:'211px'}} id="homeGaleri">
                    {/* <HomeGaleri/> */}
            </section>
            <section>
                        <Client/>
            </section>
              
        </div>
    )
}

export default Home
