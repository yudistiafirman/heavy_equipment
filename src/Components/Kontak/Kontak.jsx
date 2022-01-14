import React, { useRef,useState } from 'react'
import TextField from '@mui/material/TextField'
import KontakPict from './assets/kontak.jpg'
import{ init } from '@emailjs/browser';
import { Alert, FormControl, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
init("user_F9FUG8QkPkFceIrGy3zC6");
const Kontak = () => {
  const [name,setName]=useState('')
  const [company,setCompany]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
  const [errorName,setErrorName]=useState(false)
  const [errorCompany,setErrorCompany]=useState(false)
  const [errorEmail,setErrorEmail]=useState(false)
  const [errorEmailValue,setErrorEmaiValue]=useState(false)
  const [errorPhone,setErrorPhone]=useState(false)
  const [errorMessage,setErrorMessage]=useState(false)
  const [openAlert,setOpenAlert]=useState(false)
  const [severity,setSeverity]=useState('')
  const form = useRef()
  const sendEmail = () => {

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(!name){
      setErrorName(true)
    }else if (!company){
      setErrorCompany(true)
    }else if (!email){
      setErrorEmail(true)
    }else if (!emailRegex.test(email)){
      setErrorEmaiValue(true)
    }else if (phone.length <11){
      setErrorPhone(true)
    }else if (!message){
      setErrorMessage(true)
    }else{
      setErrorName(false)
      setErrorCompany(false)
      setErrorEmail(false)
      setErrorEmaiValue(false)
      setErrorPhone(false)
      setErrorMessage(false)
      const emailMessage={
        to_name:'HEC TEAMS',
        from_name:name,
        company,
        email,
        phone,
        message
      }
      emailjs.send('service_v5pb0u7', 'template_ij0curd', emailMessage)
        .then((result) => {
            Swal.fire({
              icon:'success',
              title:'Terima Kasih kami telah menerima pesan anda'
            })
        }, (error) => {
          Swal.fire({
            icon:'error',
            title:'Something went wrong'
          })
        });
    }

  };

  const onChangeEmail =(e)=>{
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(emailRegex.test(e.target.value)){
        setErrorEmaiValue(false)
        setEmail(e.target.value)
    }else{
      setErrorEmail(true)
      setEmail(e.target.value)
    }
  }
  return (
    <div className='latarContainer'>
           <div 
            style={{
              backgroundImage:`url(${KontakPict})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Kontak</div>
                <div className='heroOrangeText'>Kami</div>
              </div>
            </div>
              </div>
         
            </div>
      <div className='latarContentContainer'>
        <div className='latarContentDesc'>
          <div className='latarTitle'>Halo, kami disini</div>
          <div style={{ marginBottom: '38px' }} className='latarContent'>
            Apabila anda memiliki pertanyaan atau membutuhkan informasi lebih
            lanjut, Anda dapat menghubungi kami melalui telepon atau mengirim
            email dengan mengisinya pada formulir dibawah ini
          </div>
          <form ref={form}    >
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Nama Lengkap'
              variant='filled'
              color='success'
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            {
              errorName && <div className="latarContent" style={{color:'red',fontSize:'12px',fontStyle:'italic'}}>nama tidak boleh kosong</div>
            }
       
          </div>
          
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Perusahaan'
              variant='filled'
              color='success'
              type="text"
              onChange={(e)=>setCompany(e.target.value)}
              value={company}
            />
                {
              errorCompany && <div className="latarContent" style={{color:'red',fontSize:'12px',fontStyle:'italic'}}>nama perusahaan  tidak boleh kosong</div>
            }
          </div>
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Alamat Email*'
              variant='filled'
              color='success'
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
                   {
              errorEmail && <div className="latarContent" style={{color:'red',fontSize:'12px',fontStyle:'italic'}}>email  tidak boleh kosong</div>
            }
            {
              errorEmailValue && <div className="latarContent" style={{color:'red',fontSize:'12px',fontStyle:'italic'}}>format email salah</div>
            }
          </div>
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Nomor Telepon*'
              variant='filled'
              color='success'
              type="number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
                {
              errorPhone && <div className="latarContent" style={{color:'red',fontSize:'12px',fontStyle:'italic'}}>No tidak valid sebagai no telepon</div>
            }
          </div>
      
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Pesan*'
              variant='filled'
              color='success'
              type="text"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            {
              errorMessage && <div className="latarContent" style={{color:'red',fontSize:'12px',fontStyle:'italic'}}>Pesan tidak boleh kosong</div>
            }
          </div>
  
          </form>
          <div className='lihatDetailPelayananCard'>
              <div onClick={sendEmail} style={{cursor:'pointer'}} className='lihatDetailDesc'>Kirim Pesan</div>
            </div>
          <div
            style={{
              width: '97%',
              marginBottom: '40px',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
         
          </div>
        </div>
        <div>
          <div className='latarTitle'>PT.Heavy Equipment Centre </div>
          <div
            style={{ width: '100%', fontSize: '15px' }}
            className='latarContent'
          >
            Jl. Soekarno Hatta No 633A, Sukapura,
          </div>
          <div style={{ marginBottom: '32px' }} className='latarContent'>
            Kiaracondong, Bandung, Jawa Barat 40285
          </div>
          <div style={{ marginBottom: '8px' }} className='latarTitle'>
            Telepon{' '}
          </div>
          <div style={{ marginBottom: '32px' }} className='latarContent'>
            <a href="tel:+68112131122" style={{ color: 'blue', borderBottom: 'blue' }}>
              +62 8112131122
            </a>
          </div>
          <div style={{ marginBottom: '8px' }} className='latarTitle'>
            Email{' '}
          </div>
          <div style={{ marginBottom: '32px' }} className='latarContent'>
            <a href="mailto:hequipmentcentre@gmail.com" style={{ color: 'blue', borderBottom: 'blue' }}>
              hequipmentcentre@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontak
