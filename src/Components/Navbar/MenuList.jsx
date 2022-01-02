import React, { useCallback, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import dropDownIcon from './assets/dropDown.png'
import { AiFillCaretDown } from "react-icons/ai";
const MenuList = ({onPressDropDownTentang, onPressDropDownPelayanan}) => {
    const [menuIdx,SetMenuIdx]= useState(0)
    const [hoverIdx,SetHoverIdx]= useState(null)
    const menuHasDropDown =[1,2]
    const location = useLocation()
 


    const menuList =[
     {
        title:'Home',
        to:'/'
     },
     {
        title:'Tentang Kami',
        to:''
     },
     {
        title:'Pelayanan Kami',
        to:''
     },
     {
        title:'Galeri',
        to:'/galeri'
     },
     {
         title:'Fasilitas dan Pelatihan',
         to:'/fasilitas'
     },
     {
         title:'Info Pelatihan',
         to:'/infoPelatihan'
     },
     {
         title:'Career',
         to:'/career'
     },
     {
         title:'Kontak',
         to:'/kontak'
     }    

]

const onHover=useCallback((idx)=>{
        if(menuHasDropDown.includes(idx)){
            if(idx === 1){
                onPressDropDownTentang(true)
                onPressDropDownPelayanan(false)
            }else if(idx === 2){
                onPressDropDownPelayanan(true)
                onPressDropDownTentang(false)
            }
            SetHoverIdx(idx)
        }else{
            onPressDropDownTentang(false)
            onPressDropDownPelayanan(false)
            SetHoverIdx(null)
        }
        SetMenuIdx(idx)
},[hoverIdx])

const onHoverOut=()=>{
    SetHoverIdx(null)
}

const onChangeRoute=(idx)=>{
    if(!menuHasDropDown.includes(idx)){
        window.scrollTo(0)
        SetMenuIdx(idx)
    }
  
}

    return (
        <ul>
            {
                menuList.map((value,index)=>{
                  return  <li key={index} onMouseOut={onHoverOut} onMouseEnter={()=>onHover(index)}  >
                        <Link id='menuList'  onClick={()=>onChangeRoute(index)} style={{color: location.pathname === value.to ?"#FDC232":"" ,display:'flex',alignItems:'center'}}  to={value.to !== '' && value.to}>{value.title.toUpperCase()}
                        {menuHasDropDown.includes(index) && <AiFillCaretDown style={{marginLeft:'7px',color:hoverIdx && hoverIdx === index ?'#FDC232':''}}/> }
                        </Link>
                     
                    </li>
                })
            }
        </ul>
    )
}

export default MenuList
