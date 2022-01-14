import React, { useEffect, useLayoutEffect,useRef,useState,useCallback } from 'react'

import PelatihanPict from './assets/Pelatihan.jpg'

import FilledInput from '@mui/material/FilledInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { FaSearch } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Slider from 'react-slick'
import { Dialog } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../Default'
import { cardDescSlicer, cardTitleSlicer } from '../utils/funcHelper'
import moment from 'moment'
import  {useNavigate} from 'react-router-dom'
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

const InfoPelatihan = () => {
  const [cardIdx, setCardContentIdx] = useState(0)
const [pageHoverIdx, SetPageHoverIdx] = useState(0)
const [width, height] = useWindowSize()
const [filter, SetFilter] = useState(false)
const [startDate,SetStartDate]=useState(new Date())
const [infoPelatihanContent,setInfoPelatihanContent]=useState([])
const [searchInput,setSearchInput]=useState('')
const slide =useRef()
const [category,setCategory]=useState([])
const navigate = useNavigate()
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
  beforChange:(index)=>SetPageHoverIdx(index),
  afterChange: (index)=>SetPageHoverIdx(index),
  customPaging: i => (

      <div
      onClick={()=>SetPageHoverIdx(i)}
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

useEffect(()=>{
  getAllPelatihan('','','')
  getCategory()
},[])
const getAllPelatihan = (queryValue,date,category) => {
  axios.get(`${apiUrl}/pelatihan/all?&name=${queryValue}&date=${date}&category=${category}`).then(response => {
    setInfoPelatihanContent(response.data.data)

  })
}

const onChangePencarian=useCallback((e)=>{
  setSearchInput(e.target.value)
  getAllPelatihan(e.target.value,'','')

},[searchInput])


const onChangeDate=useCallback((newDate)=>{
  SetStartDate(newDate)
},[startDate])

const getCategory =()=>{
  axios.get(`${apiUrl}/pelatihan/category`).then((response)=>{
    const categoryName = response.data.data.map((v,i)=> ({value:false,category:v.category_name}))
    setCategory(categoryName)
  })
}

const onClickCategory =useCallback((idx,name)=>{
  const arrCategory =[]
  for (var i =0;i<category.length;i++){
    if ( i ===idx){
      category[i].value = true
    }else{
      category[i].value = false
    }
    arrCategory.push(category[i])
  }
  setCategory(arrCategory)
},[category])

const resetPencarian=()=>{
  setSearchInput('')
  SetStartDate(new Date())
  getAllPelatihan('','','')
  getCategory()
  SetFilter(false)
}

const onApplyFilter =()=>{
  const categoryName = category.filter((v,i)=> v.value === true)
  getAllPelatihan('',moment(startDate).format('YYYY-MM-DD'),categoryName[0].category)
  SetFilter(false)
}

  return (
    <div className='latarContainer'>
             <div 
            style={{
              backgroundImage:`url(${PelatihanPict})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Info</div>
                <div className='heroOrangeText'>Pelatihan</div>
              </div>
            </div>
              </div>
         
            </div>
      <div className='infoContentContainer'>
        <div className='infoContainer'>
          <div
            style={{ marginBottom: '40px' }}
            className='latarTitle'
          >
            Semua Pelatihan
          </div>
          {
            infoPelatihanContent.length > 0 ?          <Slider {...settings}>
            { infoPelatihanContent.map((v, i) => {
              return (
                <div   ref={slide} key={i}>
                 
                  <div
                    onMouseEnter={() => setCardContentIdx(i)}
className = 'infoPelatihanCard'

                    style={{
                      boxShadow:
                        cardIdx === i
                          ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                          : '',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <div className='imageContainer'>
                    <div
                         style={{
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${apiUrl}/${v.image})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          cursor: 'pointer'
                        }}
                        />
                    </div>
                    <div
                      className='pelatihanCardTitle'
                      style={{
                        color: cardIdx === i ? '#FDC232' : '#000000'
                      }}
                    >
                      {cardTitleSlicer(v.name)}
                    </div>
                    <div className='pelatihanCardDesc'>{cardDescSlicer(v.descriptions)}</div>
                    <div
                      className={
                        cardIdx === i
                          ? 'pelatihanCardBtn active'
                          : 'pelatihanCardBtn '
                      }
                    >
                      <div
                        className='cardBtnTitle'
                    
                      >
                        <a onClick={()=>navigate('detailPelatihan/'+v.id+'/'+v.name)}   style={{
                          color: cardIdx === i ? '#FDC232' : '#000000',
                          cursor:'pointer'
                        }} >
                        Lihat Detail
                        </a>
                       
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider> : <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>

            <div className='latarTitle'>Pencarian Tidak Ditemukan</div>
          </div>
          }

        </div>
        <div
        className='inputPencarianContainer'
        >
          <FormControl fullWidth variant='filled'>
            <InputLabel  htmlFor='filled-adornment-password'>
              Cari Pelatihan
            </InputLabel>
            <FilledInput
            onFocus={resetPencarian}
              type='text'
              value={searchInput}
              onChange={onChangePencarian}
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
              
              <div style={{marginLeft:'16px',marginRight:'16px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
          label="Tanggal Mulai Pelatihan"
          value={startDate}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            onChangeDate(newValue)
          }}
          renderInput={(params) => <TextField style={{marginTop:'20px'}} fullWidth {...params} />}
        />

          </LocalizationProvider>
            </div>
      
        
           
     
       
         
            </div>
            <div className="categoryContainer">
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
              {
                category.map((v,i)=>{
                  return (
                    <div style={{display:'flex',alignItems:'center'}}>
                    <Checkbox onClick={()=>onClickCategory(i,v.category)} checked={v.value===true} />
                    <div
                    style={{
                      color: '#000000',
                      fontSize: '14px',
                      fontWeight: '400',
                      fontFamily: "'inter',sans-serif"
                    }}
                    >{v.category}</div>
                    </div>
                  )
                })
              }
         
            </div>
            </div>
            <div onClick={onApplyFilter} className="hubungiBtn">
                            <div className="hubungiBtnTitle">TERAPKAN</div>
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
            <div style={{marginLeft:'16px',marginRight:'16px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
          label="Tanggal Mulai Pelatihan"
          value={startDate}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            onChangeDate(newValue)
          }}
          renderInput={(params) => <TextField style={{marginTop:'20px'}} fullWidth {...params} />}
        />

          </LocalizationProvider>
            </div>
            <div className='categoryContainer'>
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
              {
                category.map((v,i)=>{
                  return (
                    <div style={{display:'flex',alignItems:'center'}}>
                    <Checkbox onClick={()=>onClickCategory(i,v.category)} checked={v.value===true} />
                    <div
                    style={{
                      color: '#000000',
                      fontSize: '14px',
                      fontWeight: '400',
                      fontFamily: "'inter',sans-serif"
                    }}
                    >{v.category}</div>
                    </div>
                  )
                })
              }
         
            </div>
            </div>
            <div style={{marginLeft:'16px'}} onClick={onApplyFilter} className="hubungiBtn">
                            <div className="hubungiBtnTitle">TERAPKAN</div>
                        </div>
        
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default InfoPelatihan
