import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import EllipseOrange from './assets/EllipseOrange.png'
import EllipseBlue from './assets/EllipseBlue.png'
const pelatihanPopularContent = [
  {
    image: '',
    title: 'Judul Pelatihan 1',
    desc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
  },
  {
    image: '',
    title: 'Judul Pelatihan 2',
    desc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
  },
  {
    image: '',
    title: 'Judul Pelatihan 3',
    desc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
  },
  {
    image: '',
    title: 'Judul Pelatihan 4',
    desc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
  },
  {
    image: '',
    title: 'Judul Pelatihan 5',
    desc:
      'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
  }
]
const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  width: 100
}
const PelatihanPopuler = () => {
  const [cardIdx, setCardContentIdx] = useState(0)
  return (
    <div className='pelatihanContainer'>
      <div className='pelatihanInnerContainer'>
        <div className='servicesTitle'>
          <div className='marginSeparator' />
          <div className='titleContainer'>
            <div className='titleForYou'>Pelatihan populer kami</div>
            <p className='forYouDesc'>
              Berbagai perusahaan mempercayakan sumber dayanya pada
              pelatihan-pelatihan esensial kami
            </p>
          </div>
        </div>
        <div className='pelatihanCardContainer'>
          <Slider {...settings}>
            {pelatihanPopularContent.map((v, i) => {
              return (
                <div key={i} className='pelatihanCard'>
                  <div
                    className='pelatihanCardInner'
                    onMouseEnter={() => setCardContentIdx(i)}
                    style={{
                      boxShadow:
                        cardIdx === i
                          ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                          : '',
                      backgroundColor: cardIdx === i ? '#FFFFFF' : '#E5E5E5'
                    }}
                  >
                    <div className='imageContainer'></div>
                    <div
                      className='pelatihanCardTitle'
                      style={{
                        color: cardIdx === i ? '#FDC232' : '#000000'
                      }}
                    >
                      {v.title}
                    </div>
                    <div className='pelatihanCardDesc'>{v.desc}</div>
                    <div
                      className={
                        cardIdx === i
                          ? 'pelatihanCardBtn active'
                          : 'pelatihanCardBtn '
                      }
                    >
                      <div
                        className='cardBtnTitle'
                        style={{
                          color: cardIdx === i ? '#FDC232' : '#000000'
                        }}
                      >
                        Lihat Detail
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
      <div></div>
      <img className='ellipseOrange' width='270px' src={EllipseOrange} />
      <img className='ellipseBlue' width='212px' src={EllipseBlue} />
    </div>
  )
}

export default PelatihanPopuler
