import React from 'react'
import { useNavigate } from "react-router-dom";
import Fasilitas from './fasilitas.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillCaretDown } from "react-icons/ai";
const FasilitasPendidikan = () => {
    return (
        <div className='latarContainer'>
          <div className='jumbotron'>
            <img
              height='442px'
              style={{ resize: 'horizontal', overflow: 'auto' }}
              width='100%'
              src={Fasilitas}
            />
          </div>
          <div className='campaign'>
            <div className='textWithBtn'>
              <div className='heroMediumText'>Fasilitas dan</div>
              <div className='heroOrangeText'>Pelatihan</div>
            </div>
          </div>
          <div className='latarContentContainer'>
            <div className='latarContentDesc'>
            <div className='latarTitle'>Program dan Pelatihan</div>
            <div style={{marginBottom:'20px'}} className='latarContent'>
            Menjadi perusahaan jasa layanan support alat berat yang professional dan synergi dengan customer di seluruh Indonesia. 
            </div>
            <div className="accordion">
            <Accordion>
          <AccordionSummary
            expandIcon={<AiFillCaretDown/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>Fasilitas dan Pelatihan 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            Isi definisi program pendidikan dan pelatihan disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
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
            <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Fasilitas dan Pelatihan 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}   className='latarContent'>
            Isi definisi program pendidikan dan pelatihan disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
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
            <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Fasilitas dan Pelatihan 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}   className='latarContent'>
            Isi definisi program pendidikan dan pelatihan disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
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
            <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Fasilitas dan Pelatihan 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}   className='latarContent'>
            Isi definisi program pendidikan dan pelatihan disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
            </div>
            </div>
          </div>
        </div>
      )
}

export default FasilitasPendidikan
