import React from 'react'
import PelatihanPict from './assets/Pelatihan.jpg'
import { useNavigate } from 'react-router-dom'
import Carousel from '../infoCarousel'
import { useState } from 'react/cjs/react.development'
import FilledInput from '@mui/material/FilledInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaSearch } from 'react-icons/fa'
const InfoPelatihan = () => {
  let navigate = useNavigate()
  const [cardIdx, setCardContentIdx] = useState(0)
  const infoPelatihanContent = [
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
    },
    {
      image: '',
      title: 'Judul Pelatihan 6',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      image: '',
      title: 'Judul Pelatihan 7',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      image: '',
      title: 'Judul Pelatihan 8',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      image: '',
      title: 'Judul Pelatihan 9',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      image: '',
      title: 'Judul Pelatihan 10',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      image: '',
      title: 'Judul Pelatihan 11',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      image: '',
      title: 'Judul Pelatihan 12',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    },
    {
      image: '',
      title: 'Judul Pelatihan 13',
      desc:
        'Li Europan lingues es membres del sam familie. Lor separat existentie es un'
    }
  ]

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 6
  }
  return (
    <div className='latarContainer'>
      <div className='jumbotron'>
        <img
          height='442px'
          style={{ resize: 'horizontal', overflow: 'auto' }}
          width='100%'
          src={PelatihanPict}
        />
      </div>
      <div className='campaign'>
        <div className='textWithBtn'>
          <div className='heroMediumText'>Info</div>
          <div className='heroOrangeText'>Pelatihan</div>
        </div>
      </div>
      <div className='latarContentContainer'>
        <div style={{ width: '840px' }}>
          <div
            style={{ marginLeft: '20px', marginBottom: '40px' }}
            className='latarTitle'
          >
            Semua Pelatihan
          </div>
          <Carousel cols={3} rows={2} gap={40} loop showDots>
            {infoPelatihanContent.map((v, i) => {
              return (
                <Carousel.Item>
                  <div
                    onMouseEnter={() => setCardContentIdx(i)}
                    style={{
                      width: '226px',
                      height: '335px',
                      border: '1px solid #C4C4C4',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow:
                        cardIdx === i
                          ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                          : '',
                      backgroundColor: cardIdx === i ? '#FFFFFF' : '#E5E5E5',
                      cursor: 'pointer'
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
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <FormControl variant='filled'>
            <InputLabel htmlFor='filled-adornment-password'>
              Cari Pelatihan
            </InputLabel>
            <FilledInput
              type='text'
              style={{ width: '280px', height: '56px' }}
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
          <div
            style={{
              width: '280px',
              height: '420px',
              border: '1px solid #F5F5F5',
              marginTop: '26px',
              borderRadius: '10px'
            }}
          >
            <div
              style={{
                height: '68px',
                color: '#000000',
                fontSize: '15px',
                fontWeight: 'bold',
                fontFamily: "'inter',sans-serif",
                borderBottom: '1px solid #F5F5F5 ',
                display: 'flex',
                alignItems: 'center'
              }}
            >
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
              <span
                style={{
                  height: '40px',
                  borderRadius: '40px',
                  border: '1px solid #071243',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor:'pointer'
                }}
              >
                <div
                style={{
                  color: '#FDC232',
                  fontSize: '14px',
                  fontWeight: '800',
                  fontFamily: "'inter',sans-serif",
                  padding:'15px'
                }}
                >Terbaru</div>
              </span>
              <span
                style={{
                  height: '40px',
                  borderRadius: '40px',
                  border: '1px solid #071243',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor:'pointer'
                }}
              >
                <div
                style={{
                  color: '#FDC232',
                  fontSize: '14px',
                  fontWeight: '800',
                  fontFamily: "'inter',sans-serif",
                  padding:'15px'
                }}
                >Paling Sesuai</div>
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

export default InfoPelatihan
