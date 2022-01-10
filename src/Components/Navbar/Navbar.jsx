import React,{useState,useContext, useLayoutEffect, useEffect, useCallback} from 'react'
import { a, useLocation,useNavigate } from 'react-router-dom'
import HecLogo from './assets/hec.png'
import MenuList from './MenuList'
import './Navbar.css'
import NavbarEmailInfo from './NavbarEmailInfo'
import NavbarPhoneInfo from './NavbarPhoneInfo'
import TentangHec from '../TentangHec/TentangHec'
import PelayananKami from '../PelayananKami/PelayananKami'
import {FaBars,FaPhoneAlt,FaRegEnvelope} from 'react-icons/fa'
import { MenuContext } from "react-flexible-sliding-menu";
import Backdrop from '@mui/material/Backdrop';
import Fb from './assets/facebook.png'
import Yt from './assets/youtube.png'
import Linkedin from './assets/linkedin.png'
import Instagram from './assets/instagram.png'
import axios from 'axios'
import {apiUrl} from '../../Default'
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Navbar = () => {
  const [isIdPressed, SetIsIdPress] = useState(true)
  const [tentangKami,SetTentangKami]=useState(false)
  const [pelayanKami,SetPelayanKami]=useState(false)
  const { openMenu,closeMenu } = useContext(MenuContext);
  const [openBackDrop,SetOpenBackDrop]= useState(false)
  const [width,height]=useWindowSize()
  const [openAdminLogin,SetOpenAdminLogin]=useState(false)
  const [emailValue,SetEmailValue]=useState('')
  const [passwordValue,SetPasswordValue]=useState('')
  const [errorEmail,SetErrorEmail]=useState({
    boolEmail :false,
    errorEmailMsg:''
  })
  const [errorPassword,SetErrorPassword]=useState({
    boolPassword:false,
    errorPasswordMsg:''

  })
  const [failedLogin,SetFailedLogin]=useState(false)
  const [failedLoginMsg,SetFailedLoginMsg]=useState('')
  const location=useLocation()
  const navigate = useNavigate()

  const{boolEmail,errorEmailMsg}=errorEmail
  const {boolPassword,errorPasswordMsg}=errorPassword
  const onLeaveNav =()=>{
    SetTentangKami(false)
    SetPelayanKami(false)
  }

useEffect(()=>{
  if(width >= 969){
    closeMenu()
    SetOpenBackDrop(false)
  }
  if(location.search ==='?adminNiBoZzz'){
    SetOpenAdminLogin(true)
    
  }
},[width,location])

const onChangeEmail =useCallback((e)=>{
  const re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  if(re.test(e.target.value)){
  
    SetErrorEmail({boolEmail:false,errorEmailMsg:''})
    SetEmailValue(e.target.value)
  }else{
    SetErrorEmail({boolEmail:true,errorEmailMsg:'Format email salah'})
    SetEmailValue(e.target.value)
  }

},[emailValue,boolEmail,errorEmailMsg])

const onChangePassword = useCallback((e)=>{
  const rePassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  if(!rePassword.test(e.target.value)){
    SetErrorPassword({boolPassword:true,errorPasswordMsg:'Password harus terdiri paling sedikit 1 huruf besar 1 huruf kecil, dan satu nomor'})
    SetPasswordValue(e.target.value)
  }else{
    SetErrorPassword({boolPassword:false,errorPasswordMsg:''})
    SetPasswordValue(e.target.value)
  }

},[passwordValue,boolPassword,errorPasswordMsg])

const handleClose=()=>{
  closeMenu()
  SetOpenBackDrop(false)
}

const handleSlide =()=>{
  openMenu()
  SetOpenBackDrop(true)
}

const onLogin=()=>{
  if(emailValue && passwordValue && !boolEmail && !boolPassword){
    axios.post(apiUrl+'/auth/login',{
      email:emailValue,
      password:passwordValue
    }).then((res)=>{
      if(res.data.success){
        localStorage.setItem('user',res.data.user)
        window.location ='adminHome'
      }else{
        SetFailedLogin(true)
        SetFailedLoginMsg(res.data.message)
      }
    })
  }


}
  return  (
    <div className='navbar'>
      <div className='header'>
     
        
     
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <FaBars size="large" className='hamburgerMenu' onClick={handleSlide} color='#000000' />
          <img src={HecLogo} className='imageLogo' />
       
        </div>

        <div
          className='navbarInfoContainer'
        >
          <div className='contactInformation'>
            <div className='callMe'>Hubungi Sekarang</div>
            <div className='phoneAndEmail'>
              <NavbarPhoneInfo />
              <NavbarEmailInfo />
            </div>
          </div>

       

          <div className='contactSeparator' />
          <div style={{height:'100px',alignSelf:'center'}}>
          <div className='transBtn'>
            <span
              onClick={() => SetIsIdPress(!isIdPressed)}
              style={{
                backgroundColor: isIdPressed ? '#071243' : '#ffffff',
                color: isIdPressed ? '#ffffff' : '#071243'
              }}
              className='translate'
            >
              ID
            </span>
            <span
              onClick={() => SetIsIdPress(!isIdPressed)}
              style={{
                backgroundColor: isIdPressed ? '#ffffff' : '#071243',
                color: isIdPressed ? '#071243' : '#ffffff'
              }}
              className='translate'
            >
              EN
            </span>
          </div>
          <div className="socialMedia">
            <img alt='#' src={Linkedin} style={{width:'16px',height:'16px',marginRight:'14px'}}/>
            <img alt='#'  src={Yt} style={{width:'23px',height:'16px',marginRight:'14px'}}/>
            <img alt='#' onClick={()=>window.location = 'https://www.instagram.com/heavyequipmentcentre'}  src={Instagram} style={{width:'16px',height:'16px',marginRight:'14px',cursor:'pointer'}}/>
            <img alt='#' onClick={()=> window.location = 'https://www.facebook.com/profile.php?id=100075861904489'}  src={Fb} style={{width:'16px',height:'16px',cursor:'pointer'}}/>
          </div>
          </div>
      
        </div>
        <div className="mobileInfoContainer">
          <a style={{marginRight:'21px'}} href="tel:+68112131122">
          <FaPhoneAlt  color="#000000"/>
          </a>
          <a href="mailto:hequipmentcentre@gmail.com">
          <FaRegEnvelope color="#000000"/>
          </a>
         
            
          </div>
      </div>
      <nav onMouseLeave={onLeaveNav} className='navigation'>
        <MenuList onPressDropDownPelayanan={SetPelayanKami} onPressDropDownTentang={SetTentangKami} />
      </nav>
      {
        tentangKami &&     <TentangHec onPressDropDownTentang={SetTentangKami}/>
      }
      {
        pelayanKami &&   <PelayananKami onPressDropDownPelayanan={SetPelayanKami}  />
      }
      <Backdrop open={openBackDrop} onClick={handleClose}/>
      <Dialog open={openAdminLogin} onClose={()=>SetOpenAdminLogin(false)}>
        {
          failedLogin &&      <Alert severity="error" >
            {failedLoginMsg}
  </Alert>
        }
 
      <DialogTitle>Admin Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Login to this website admin page, please enter your email address and password here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailValue}
            error={boolEmail}
            onChange={onChangeEmail}
          />
                <DialogContentText fontSize="12px" color="red">
          {errorEmailMsg}
          </DialogContentText>
             <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={passwordValue}
            error={boolPassword}
            onChange={onChangePassword}
          />
              <DialogContentText fontSize="12px" color="red">
              {errorPasswordMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>SetOpenAdminLogin(false)}>Cancel</Button>
          <Button onClick={onLogin}>Login</Button>
        </DialogActions>
      </Dialog>
 
    </div>
  )
}

export default Navbar
