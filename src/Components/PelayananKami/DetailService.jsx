import React from 'react'
import { FaShareAlt }from 'react-icons/fa'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillCaretDown } from "react-icons/ai";
const DetailService = () => {
    return (
        <div className='detailPelatihanContainer'>
            <div className="detailInnerContainer">
                <div  className="routingDetail">
                    <div className="routingInActive">Home</div>
                    <div className="routingInActive">/</div>
                    <div className="routingInActive">Jasa Service Alat Berat</div>
                    <div className="routingInActive">/</div>
                    <div style={{color:'#000000'}} className="routingInActive">Jasa Servis 1</div>
                </div>
         
            <div className="detailContentContainer">
            <div className="detailTitleContainer">
                <div className="detailTitle">
                Jasa Servis 1
                </div>
               <div className="titleIconContainer">
                   <FaShareAlt/>
               </div>
            </div>
        
             
            <div className="detailDesc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus
            </div>
            <div style={{width:'100%'}} className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>Scope Servis 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
         Isi Scope Servis Disini Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          <div style={{width:'100%'}} className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>Scope Servis 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
         Isi Scope Servis Disini Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          <div style={{width:'100%'}} className="accordion">
          <Accordion>
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>Scope Servis 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
         Isi Scope Servis Disini Anda dapat menggunakan sebanyak apapun informasi yang ingin dimasukkan disini. Pada bagian ini anda hanya dapat menggunakan teks biasa atau tautan URL yang akan dilempar ke halaman spesifik untuk menjaga efek bersih dari halaman. Disarankan di bagian ini anda menggunakan informasi ringkasan dan menambahkan tautan URL prgoram pendidikan dan pelatihan yang dimaksud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          </div>
          <div className="detailDesc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </div>
            <div style={{width:'100%'}} className="hubungiBtn">
                            <div className="hubungiBtnTitle">HUBUNGI KAMI</div>
                        </div>
            </div>
           
            </div>
            <div style={{marginTop:'40px'}} className="lihatJuga">
            <div className="lihatJugaTitle">Lihat Juga</div>
            <div className="lihatJugaContent">Jasa Servis 1</div>
            <div className="lihatJugaContent">Jasa Servis 2</div>
            <div className="lihatJugaContent">Jasa Servis 3</div>
        </div>
        </div>
    )
}

export default DetailService
