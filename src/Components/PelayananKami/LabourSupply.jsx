import React from 'react'
import { useNavigate } from "react-router-dom";
import Labour from './assets/labour.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillCaretDown } from "react-icons/ai";
const LabourSupply = () => {
    let navigate = useNavigate()
    return (
      <div className='latarContainer'>
        <div className='jumbotron'>
          <img
            height='442px'
            style={{ resize: 'horizontal', overflow: 'auto' }}
            width='100%'
            src={Labour}
          />
        </div>
        <div className='campaign'>
          <div className='textWithBtn'>
            <div className='heroMediumText'>Labour</div>
            <div className='heroOrangeText'>Supply</div>
          </div>
        </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Labour Supply</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          HEC menyediakan layanan labour supply untuk mendukung efektivitas dan efisiensi pekerjaan perusahaan anda secara mudah dan trackable. Kami memiliki beberapa paket yang dapat anda pilih pada informasi dibawah ini.
          </div>
          <div className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>Labour Supply 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
          Isi Labour Supply disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          <div className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Labour Supply 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}   className='latarContent'>
          Isi Labour Supply disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          <div className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Labour Supply 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}   className='latarContent'>
          Isi Labour Supply disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          <div className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Labour Supply 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}   className='latarContent'>
          Isi Labour Supply. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <div onClick={() => navigate('/program')} className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
            </div>
            <div onClick={() => navigate('/konsultan')} className='lihatJugaContent'>
              Konsultan
            </div>
            <div onClick={() => navigate('/penjualan')} className='lihatJugaContent'>
              Penjualan Sparepart Alat Berat
            </div>
            <div onClick={() => navigate('/jasa')} className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </div>
          </div>
        </div>
      </div>
    )
}


export default LabourSupply
