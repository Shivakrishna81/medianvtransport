import React,{useState} from 'react'
import { MdAccountCircle } from "react-icons/md";

import './Header.css'

const Header = ({changeOption,selectedOption}) => {

    

    const changeSection=(value)=>{
        changeOption(value)
    }

  return (
    <div className='header'>
       <div className='topOptions'>
              <button className={`${selectedOption==="Bid"?"selectedOption":"Option"}`} onClick={()=>changeSection("Bid")}>Bid</button>
              <button className={`${selectedOption==="POD"?"selectedOption":"Option"}`} onClick={()=>changeSection("POD")}>POD</button>
              <button className={`${selectedOption==="Vendor"?"selectedOption":"Option"}`} onClick={()=>changeSection("Vendor")}>Vendor</button>
              <button className={`${selectedOption==="User"?"selectedOption":"Option"}`} onClick={()=>changeSection("User")}>User</button>
              <div className='optionCont'>
                <MdAccountCircle/>
                <select className='options'>
                    <option>
                        Frieght EG
                    </option>
                </select>
              </div>
       </div>

    </div>
  )
}

export default Header