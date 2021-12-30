import React from 'react'
import CareerPict from './assets/career.jpg'
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
const Career = () => {
    const [cardIdx, setCardContentIdx] = useState(0)
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
          src={CareerPict}
        />
      </div>
      <div className='campaign'>
        <div className='textWithBtn'>
          <div className='heroMediumText'>Info</div>
          <div className='heroOrangeText'>Karir</div>
        </div>
      </div>
      <div className='latarContentContainer'>
        <div style={{ width: '840px' }}>
          <div
            style={{ marginLeft: '20px', marginBottom: '40px' }}
            className='latarTitle'
          >
            Semua Karir
          </div>
          <Carousel cols={3} rows={2} gap={40} loop showDots>
            {infoPelatihanContent.map((v, i) => {
              return (
                <Carousel.Item>
                  <div
                    onMouseEnter={() => setCardContentIdx(i)}
                    style={{
                      width: '220px',
                      height: '210px',
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
          <div
            style={{
              width: '280px',
              height: '320px',
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
              >Human Resources</div>
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
              >Information Technology</div>
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
              >Field Technical</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
