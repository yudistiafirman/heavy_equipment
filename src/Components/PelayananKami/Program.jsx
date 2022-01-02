import React from 'react'
import { Link } from "react-router-dom";
import Education from './assets/education.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillCaretDown } from "react-icons/ai";
const Program = () => {
    return (
      <div className='latarContainer'>
                <div 
            style={{
              backgroundImage:`url(${Education})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Program Pendidikan</div>
                <div className='heroOrangeText'>dan Pelatihan</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Program Pendidikan dan Pelatihan</div>
          <div style={{marginBottom:'20px'}} className='latarContent'>
          Dalam rangka sumbangsih dan pengembangan sumber daya manusia untuk segala cakupan, HEC menyediakan program pendidikan dan pelatihan bagi internal maupun client kami agar terciptanya sebuah standar baku mutu yang baik dalam kebutuhan bidang industri. 
          </div>
          <div className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>Program Pendidikan Awal</Typography>
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
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Program Pendidikan Menengah</Typography>
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
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Program Pendidikan dan Atas</Typography>
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
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>Program Pendidikan dan Pelatihan Lainnya</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}   className='latarContent'>
          Isi definisi program pendidikan dan pelatihan disini. Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <Link onClick={() => window.scrollTo(0)} to='/labour' className='lihatJugaContent'>
              Labour Supply
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/konsultan' className='lihatJugaContent'>
              Konsultan
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/penjualan' className='lihatJugaContent'>
              Penjualan Sparepart Alat Berat
            </Link>
            <Link onClick={() => window.scrollTo(0)} to='/jasa' className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Program
