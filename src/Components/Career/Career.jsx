import React from 'react'
import CareerPict from './assets/career.jpg'
import { useState ,useLayoutEffect} from 'react/cjs/react.development'
import FilledInput from '@mui/material/FilledInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Checkbox from '@mui/material/Checkbox';
import { FaSearch } from 'react-icons/fa'
import Slider from 'react-slick'
import { AiOutlineClose } from 'react-icons/ai'
import { Dialog } from '@mui/material'
function useWindowSize () {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize () {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}
const Career = () => {
    const [cardIdx, setCardContentIdx] = useState(0)
    const [pageHoverIdx, SetPageHoverIdx] = useState(0)
const [width, height] = useWindowSize()
const [filter, SetFilter] = useState(false)
  const infoPelatihanContent = [
    {
      title: 'Head of Human Resources',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Training Manager',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Office Boy',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'IT Support',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Satpam',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Tibum',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Full Stack Engineer',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Electrican',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Training Consultant',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Mechanic',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Accounting',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Sales and Marketing',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      title: 'Parking Man',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    }
  ]

  const settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    vertical : width <= 490 ? true: false,
    verticalSwiping:width <= 490 ? true:false,
    slidesToShow: width <= 490 ? 6:  width <= 725 ?2 : width <= 967 ? 3 : 3,
    rows:infoPelatihanContent.length <= 6 ?1 : width <= 967 ? 1  : 2,
    slidesToScroll:1,
    dotsClass: "slick-dots slick-thumb",
    swipeToSlide:true,
    afterChange: (index)=>SetPageHoverIdx(index),
    customPaging: i => (
  
        <div
        onClickCapture={()=>SetPageHoverIdx(i)}
         style={{
          width: "25px",
          height:"25px",
          color: i === pageHoverIdx ?"#FFFFFF":"#BCBCBC",
          border: "1px #BCBCBC solid",
          margin:'30px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'6px',
          backgroundColor:i === pageHoverIdx ? "#FDC232":""
        }}
        >
        {i+1}
        </div>
    
    ),
  
}
  return (
    <div className='latarContainer'>
            <div 
            style={{
              backgroundImage:`url(${CareerPict})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Info</div>
                <div className='heroOrangeText'>Karir</div>
              </div>
            </div>
              </div>
         
            </div>
      <div className='infoContentContainer'>
        <div className='infoContainer'>
          <div
            style={{marginBottom: '40px' }}
            className='latarTitle'
          >
            Semua Karir
          </div>
          <Slider {...settings}>
            {infoPelatihanContent.map((v, i) => {
              return (
                <div>
                  <div
                    onMouseEnter={() => setCardContentIdx(i)}
                    className='careerCard'
                    style={{
                      boxShadow:
                        cardIdx === i
                          ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                          : '',
                      backgroundColor: cardIdx === i ? '#FFFFFF' : '#E5E5E5',
                      cursor: 'pointer'
                    }}
                  >
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <FormControl fullWidth variant='filled'>
            <InputLabel htmlFor='filled-adornment-password'>
              Cari Pelatihan
            </InputLabel>
            <FilledInput
              type='text'
              style={{height: '56px' }}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    edge='end'
                  >
                    <FaSearch />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          
             <button onClick={()=>SetFilter(true)} className='filterPencarianBtnMobile'>FILTER PENCARIAN</button>
          
         
          <Dialog  open={filter} onClose={()=>SetFilter(false)}>
              <div className="filterModal">
                  <div className="filterModalTitle">
                    <div style={{ marginLeft: '16px' }} className='titlePencarian'>Filter Pencarian</div>
                    <AiOutlineClose onClick={()=>SetFilter(false)} style={{marginRight:'16px',cursor:'pointer'}} />
                  </div>
                  <div className="optionsFilterModal">
                  <div
              style={{
                height: '120px',
                borderBottom: '1px solid #F5F5F5 '
              }}
            >
              <div
                style={{
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: '400',
                  fontFamily: "'inter',sans-serif",
                  marginLeft: '16px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={
                  { 
                    marginTop: '24px', 
                    marginBottom: '14px' ,
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: '400',
                    fontFamily: "'inter',sans-serif"
                  
                  }
                  
                  }>
                  Tampilkan Berdasarkan
                </div>
              </div>
              <div
              style={{
                display:'flex',
              }}
              >
              <span className='tampilkanBerdasarkanBtn'>
                <div className='tampilkanBerdasarkanContent'>Terbaru</div>
              </span>
              <span className='tampilkanBerdasarkanBtn' >
                <div className='tampilkanBerdasarkanContent' >Paling Sesuai</div>
              </span>
              </div>
              <div
            style={
              {
                marginTop: '24px',
                marginLeft:'16px',
                marginBottom:'15px',
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }
            }
            >
              Kategori

            </div>
            <div style={{marginLeft:'5px'}} >
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Semua</div>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Pelatihan</div>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Sertifikasi</div>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Human Resource</div>
              </div>
              <div style={{marginRight:'5px',marginTop:'80%'}} className="hubungiBtn">
                            <div className="hubungiBtnTitle">TERAPKAN</div>
                        </div>
            </div>
       
         
            </div>
                  </div>
                  
              </div>
          </Dialog>
          <div
            className='filterPencarianContainer'
          >
            <div
            className='titlePencarian'>
              <div style={{ marginLeft: '16px' }}>Filter Pencarian</div>
            </div>
            <div
              style={{
                height: '120px',
                borderBottom: '1px solid #F5F5F5 '
              }}
            >
              <div
                style={{
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: '400',
                  fontFamily: "'inter',sans-serif",
                  marginLeft: '16px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={
                  { 
                    marginTop: '24px', 
                    marginBottom: '14px' ,
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: '400',
                    fontFamily: "'inter',sans-serif"
                  
                  }
                  
                  }>
                  Tampilkan Berdasarkan
                </div>
              </div>
              <div
              style={{
                display:'flex',
                justifyContent:'space-around'
              }}
              >
              <span className='tampilkanBerdasarkanBtn'  >
                <div className='tampilkanBerdasarkanContent'>Terbaru</div>
              </span>
              <span className='tampilkanBerdasarkanBtn' >
                <div  className='tampilkanBerdasarkanContent' >Paling Sesuai</div>
              </span>
              </div>
         
         
            </div>
            <div
            style={
              {
                marginTop: '24px',
                marginLeft:'16px',
                marginBottom:'15px',
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }
            }
            >
              Kategori

            </div>
            <div style={{marginLeft:'5px'}} >
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Semua</div>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Pelatihan</div>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Sertifikasi</div>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Checkbox defaultChecked />
              <div
              style={{
                color: '#000000',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: "'inter',sans-serif"
              }}
              >Human Resource</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
