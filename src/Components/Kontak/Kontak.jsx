import React from 'react'
import TextField from '@mui/material/TextField'
import KontakPict from './assets/kontak.jpg'
const Kontak = () => {
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
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Nama Lengkap'
              variant='filled'
              color='success'
            />
          </div>
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Perusahaan'
              variant='filled'
              color='success'
            />
          </div>
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Alamat Email*'
              variant='filled'
              color='success'
            />
          </div>
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Nomor Telepon*'
              variant='filled'
              color='success'
            />
          </div>
          <div style={{ width: '97%', marginBottom: '40px' }}>
            <TextField
              fullWidth
              label='Pesan*'
              variant='filled'
              color='success'
            />
          </div>

          <div
            style={{
              width: '97%',
              marginBottom: '40px',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <div className='lihatDetailPelayananCard'>
              <div className='lihatDetailDesc'>Kirim Pesan</div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#E5E5E5' }}>
          <div className='latarTitle'>Pt.Heavy Equipment Centre </div>
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
