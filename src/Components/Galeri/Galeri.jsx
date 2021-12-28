import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GaleriPict from './assets/Galeri.jpg'
import './Galeri.css'
import { Grid, Dialog } from "@material-ui/core";
import J1 from '../Home/assets/J1.jpg'
import J2 from '../Home/assets/J2.jpg'
import J3 from '../Home/assets/J3.jpg'
import J4 from '../Home/assets/J4.jpg'

const Galeri = () => {
  const [cardIdx, setCardContentIdx] = useState(0)
  const [showImage,SetShowImages]=useState(null)
    const galeriContent=[
        {
            title:'Judul Galeri 1',
            images:J1
        },
        {
            title:'Judul Galeri 2',
            images:J2
        },
        {
            title:'Judul Galeri 3',
            images:J3
        },
        {
            title:'Judul Galeri 4',
            images:J4
        },
        {
            title:'Judul Galeri 5',
            images:J1
        },
        {
            title:'Judul Galeri 6',
            images:J1
        },
    ]
    return (
      <div className='latarContainer'>
        <div className='jumbotron'>
          <img
            height='442px'
            style={{ resize: 'horizontal', overflow: 'auto' }}
            width='100%'
            src={GaleriPict}
          />
        </div>
        <div className='campaign'>
          <div className='textWithBtn'>
            <div className='heroMediumText'>Galeri</div>
            <div className='heroOrangeText'>HEC</div>
          </div>
        </div>
        <div className='galeriContent'>
            {
                galeriContent.map((v,i)=>{
                  return  <div
                  onClick={()=>SetShowImages(v.images)}
                  onMouseEnter={() => setCardContentIdx(i)}
                  style={{
                  boxShadow: cardIdx === i
                  ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                  : '',
              backgroundColor: cardIdx === i ? '#FFFFFF' : '#E5E5E5'}} className="galeriCard">
                      <div className="galeriCardImgContainer">
                          <img style={{width:'100%',height:'100%'}} src={v.images}/>
                      </div>
                      <div className="galeriCardTitleContainer">
                        <div 
                             style={{
                              color: cardIdx === i ? '#FDC232' : '#000000'
                            }}
                        className='galeriCardTitle' >{v.title}</div>
                      </div>
                  </div>
                })
            }
        </div>
        {showImage && (
        <Dialog
          // title={"POST"}
          scroll={"body"}
          open={showImage ? true : false}
          onClose={() => {
            SetShowImages(null);
          }}
          hideActions={true}
        >
          <Grid container direction="row" justify="center">
            <img style={{ maxWidth: "100%" }} src={showImage}></img>
          </Grid>
        </Dialog>
      )}
      </div>
    )
}

export default Galeri
