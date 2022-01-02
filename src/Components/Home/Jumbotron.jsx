import React, { useRef,useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import J1 from './assets/J1.jpg'
import J2 from './assets/J2.jpg'
import J4 from './assets/J4.jpg'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
const Jumbotron = () => {
  const [slideIdx, SetSlideIdx] = useState(0)
  const slider = useRef()
  const content = [
    {
      title: 'Vulputate Mollis Ultricies Fermentum Parturient',
      description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      button: 'Read More',
      image: J2,
      user: 'Luan Gjokaj',
      userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
      title: 'Phasellus volutpat metus',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: J4,
      user: 'Bruno Vizovskyy',
      userProfile: 'https://i.imgur.com/4KeKvtH.png'
    },
    {
      title: 'Phasellus volutpat metus',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: J1,
      user: 'Bruno Vizovskyy',
      userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
  ]

  const settings = {
    dots: false,
    afterChange: current => SetSlideIdx(current),
    autoPlay: true,
    autoplaySpeed: 2000,
    infinite: true,
    cssEase: "linear",
    slidesToScroll: 1
  }

  return (
    <div>
      <Slider ref={slider} {...settings}>
        {content.map((item, index) => (
          <div key={index}>
            <div 
            style={{
              backgroundImage:`url(${item.image})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='campaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Apapun Keperluan Anda</div>
                <div className='heroOrangeText'>Kami hadir untuk anda</div>
                <div className='heroSmallText'>
                  HEC sebagai penyedia alat berat profesional akan menangani
                  semua kebutuhan alat berat anda
                </div>
              </div>
            </div>
              </div>
         
            </div>

    
          </div>
        ))}
      </Slider>
      <div className='heroBtnContainer'>
        <div
          onClick={() => slider.current.slickPrev()}
          className='btnHero left'
        >
          <FaChevronLeft color='#ffffff' />
        </div>
        <div
          onClick={() => slider.current.slickNext()}
          className='btnHero right'
        >
          <FaChevronRight color='#ffffff' />
        </div>
      </div>
      <div className='heroDots'>
        {content.map((v, i) => {
          return (
            <div
              key={i}
              style={{ backgroundColor: slideIdx === i && '#FDC232' }}
              className='dots'
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Jumbotron
