import React from 'react'
import { Link} from "react-router-dom";
import Labour from './assets/labour.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillCaretDown } from "react-icons/ai";
const LabourSupply = () => {
    return (
      <div className='latarContainer'>
                <div 
            style={{
              backgroundImage:`url(${Labour})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            
            className='jumbotron'>
              <div className="jumbotronContent">
              <div className='subMenuCampaign'>
              <div className='textWithBtn'>
                <div className='heroMediumText'>Labour</div>
                <div className='heroOrangeText'>Supply</div>
              </div>
            </div>
              </div>
         
            </div>
        <div className='latarContentContainer'>
          <div className='latarContentDesc'>
          <div className='latarTitle'>Labour Supply</div>
          <div style={{marginBottom:'20px',textAlign:'justify',width:'95.5%'}} className='latarContent'>
          HEC menyediakan layanan labour supply untuk mendukung efektivitas dan efisiensi pekerjaan perusahaan anda secara mudah dan trackable. Kami memiliki beberapa paket yang dapat anda pilih pada informasi dibawah ini.
          </div>
          <ol style={{paddingLeft:'14px'}}  className='latarContent'>
            <li> MEKANIK ALAT BERAT  </li>
            <li> MEKANIK SUPPORT   </li>
            <li> OPERATOR (EXCAVATOR, BULLDOZER, DUMP TRUCK)</li>
          </ol>

          </div>
          <div className='lihatJuga'>
            <div className='lihatJugaTitle'>Lihat Juga</div>
            <Link onClick={() => window.scrollTo(0)} to='/program' className='lihatJugaContent'>
            Program Pendidikan dan Pelatihan
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


export default LabourSupply
