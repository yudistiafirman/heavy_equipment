import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Education from './assets/education.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillCaretDown } from "react-icons/ai";
const Program = () => {
  let navigate= useNavigate()
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
          <div style={{marginBottom:'20px',textAlign:'justify',width:'95.5%'}} className='latarContent'>
          Dalam rangka sumbangsih dan pengembangan sumber daya manusia untuk segala cakupan, HEC menyediakan program pendidikan dan pelatihan bagi internal maupun client kami agar terciptanya sebuah standar baku mutu yang baik dalam kebutuhan bidang industri. 
          </div>
          <div className="accordion">
          <Accordion >
        <AccordionSummary
          expandIcon={<AiFillCaretDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>MEKANIK</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ol style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>
           <li><Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>FRESH MECHANIC PROGRAM</Typography>  </li> 
        
          </ol>
          <ol start="2" style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>
          <li> <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>PELATIHAN DAN KOMPETENSI BNSP</Typography> </li>
          </ol>
          <ol style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}} >
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
                  BASIC MECHANIC COURSE (BMC)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PERIODIC SERVICE (PS) ALAT BERAT DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PERIODIC INSPECTION (PI) ALAT BERAT DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            MACHINE CONDITION INSPECTION (MCI) ALAT BERAT DARI BERBAGAI MERK

              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PREVENTIVE MAINTENANCE (PM) ALAT BERAT DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            HYDRAULIC CONTROL SYSTEM (HCS)  ALAT BERAT DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            ELECTRICAL CONTROL SYSTEM (ECS) ALAT BERAT  DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            REMOVE & INSTALL ALAT BERAT  DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            MACHINE TROUBLESHOOTING (MTS) ALAT BERAT  DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            K3LH ( KESEHATAN DAN KESELAMATAN KERJA DAN LINGKUNGAN HIDUP )
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
           K2TK ( KOMUNIKASI DAN KERJASAMA DI TEMPAT KERJA)
              </Typography>
              <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            LOCK OUT & TAG OUT (LOTO)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            AUTOLUBE SYSTEM & MAINTENANCE
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            AIR CONDITIONING SYSTEM & MAINTENANCE
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PEMBENTUKAN KARAKTER UNGGUL (BINTALSIK)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            MEKANIK EXCELLENT (BEHAVIOUR COMPETENCY)
              </Typography>
            </li>
            </li>
          </ol>
   
      
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
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>OPERATOR</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ol style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>
           <li><Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>FRESH OPERATOR PROGRAM</Typography>  </li> 
        
          </ol>
          <ol start="2" style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>
          <li> <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}}>PELATIHAN DAN KOMPETENSI BNSP</Typography> </li>
          </ol>
          <ol style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}} >
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            BASIC MACHINE SYSTEM (BMS)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PEMERIKSAAN DAN PERAWATAN HARIAN (P2H)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            DEFENSIVE DRIVING
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PEMBUATAN SIO OPERATOR

              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            K3LH ( KESEHATAN DAN KESELAMATAN KERJA DAN LINGKUNGAN HIDUP )
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            K2TK ( KOMUNIKASI DAN KERJASAMA DI TEMPAT KERJA)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PENGOPERASIAN ALAT BERAT DARI BERBAGAI MERK
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            OPERATOR EXCELLENT (BEHAVIOUR COMPETENCY)
              </Typography>
            </li>
          </ol>
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
          <Typography style={{fontSize:'18px',fontWeight:'800', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'24.3px'}} className='latarTitle'>STAFF</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ol style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}} >
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            MAINTENANCE MANAGEMENT
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            TYRE MANAGEMENT
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            ASSET MANAGEMENT
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PART INVENTORY MANAGEMENT
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            PREVENTIVE MAINTENANCE (PM) ALAT BERAT DARI BERBAGAI MERK 
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            LEADERSHIP FOR SUPERVISOR
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            TRAINING OF TRAINER (TOT)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            QUALITY IMPROVEMENT / QUALITY CONTROL CIRCLE (QCC)
              </Typography>
            </li>
            <li>
            <Typography style={{fontSize:'15px',fontWeight:'400', color:'#6B7280',fontFamily:'"inter",sans-serif',lineHeight:'22px'}}  className='latarContent'>
            STAFF EXCELLENT (BEHAVIOUR COMPETENCY)
              </Typography>
            </li>
          </ol>
        </AccordionDetails>
      </Accordion>
      
          </div>
          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <a onClick={() => navigate('/labour')}  className='lihatJugaContent'>
              Labour Supply
            </a>
            <a onClick={() => navigate('/konsultan')}  className='lihatJugaContent'>
              Konsultan
            </a>
            <a onClick={() => navigate('/penjualan')}  className='lihatJugaContent'>
              Penjualan Sparepart Alat Berat
            </a>
            <a onClick={() => navigate('/jasa')}  className='lihatJugaContent'>
              Jasa Servis Alat Berat
            </a>
          </div>
        </div>
      </div>
    )
}

export default Program
