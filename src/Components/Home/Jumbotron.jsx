import React, { useRef,useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import J1 from './assets/Home_1.JPG'
import J2 from './assets/Home_2.JPG'
import J3 from './assets/Home_3.jpg'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
const Jumbotron = () => {
  const [slideIdx, SetSlideIdx] = useState(0)
  const slider = useRef()
  const content = [
    {
      mediumText: 'APAPUN KEPERLUAN ANDA',
      orangeText:'KAMI HADIR UNTUK ANDA',
      smalltext:'HEC sebagai perusahaan jasa layanan support alat berat profesional akan menangani semua kebutuhan anda',
      description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      button: 'Read More',
      image: J1
    },
    {
      mediumText: 'KAMI ADALAH SOLUSI KEBUTUHAN',
      orangeText:'ALAT BERAT ANDA',
      smalltext:'HEC selalu siap dan selalu ada sebagai solusi semua kebutuhan alat berat anda  ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: J2
    },
    {
      mediumText: 'PENYEDIA FASILITAS DAN',
      orangeText:'PENDIDIKAN ALAT BERAT',
      smalltext:' HEC turut andil dalam meningkatkan SDM Indonesia dengan program pendidikan dan pelatihan alat berat yang didukung dengan fasilitas mumpuni',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: J3,
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
                <div className='heroMediumText'>{item.mediumText}</div>
                <div className='heroOrangeText'>{item.orangeText}</div>
                <div className='heroSmallText'>
                 {item.smalltext}
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
