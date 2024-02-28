import React,{useState} from 'react'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Header from './components/Header';
import Bid from './components/Bid';
import { BiSolidPlusSquare } from "react-icons/bi";

import './App.css'

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Bid")
  const [status,setStatus]=useState("Live")

  const changeOption=(option)=>{
    setSelectedOption(option)
  }

  return (
    <div className='mainContainer'>

      <div className='leftContainer'>
        <div>
          <div className='logoContainer'>
            <div className='logo'>

            </div>
            <h1 className='brand'>LOGO</h1>
          </div>
          <div className={`${selectedOption==="Bid"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("Bid")}>
            <BsFillGrid1X2Fill />
            <p className='option'>Bid</p>
          </div>

          <div className={`${selectedOption==="POD"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("POD")}>
            <BsFillGrid1X2Fill />
            <p className='option'>POD</p>
          </div>
          <div className={`${selectedOption==="Vendor"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("Vendor")}>
            <BsFillGrid1X2Fill />
            <p className='option'>Vendor</p>
          </div>
          <div className={`${selectedOption==="User"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("User")}>
            <BsFillGrid1X2Fill />
            <p className='option'>User</p>
          </div>
        </div>

        <div>
          <div className={`${selectedOption==="Settings"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("Settings")}>
            <BsFillGrid1X2Fill />
            <p className='option'>Settings</p>
          </div>
          <div className={`${selectedOption==="Profile"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("Profile")}>
            <BsFillGrid1X2Fill />
            <p className='option'>Profile</p>
          </div>
          <div className={`${selectedOption==="Contact"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("Contact")}>
            <BsFillGrid1X2Fill />
            <p className='option'>Contact Us</p>
          </div>
          <div className={`${selectedOption==="Logout"?"selected":"optionCont"}`} onClick={()=>setSelectedOption("Logout")}>
            <BsFillGrid1X2Fill />
            <p className='option'>Logout</p>
          </div>
        </div>

      </div>

      <div>
        <Header changeOption={changeOption} selectedOption={selectedOption}/>
        <div className='rightTopCont'>
            <div className='rightTopChild1'>
                <p className={`${status==="Live"?"selectedStatus":"status"}`} onClick={()=>setStatus("Live")}>Live</p>
                <p className={`${status==="Results"?"selectedStatus":"status"}`} onClick={()=>setStatus("Results")}>Results</p>
                <p className={`${status==="History"?"selectedStatus":"status"}`} onClick={()=>setStatus("History")}>History</p>
                <div className='searchCont'>
                  <CiSearch/>
                <input type='search' className='search' placeholder='Search'/>
                </div>
                
            </div>
            <div className='rightTopChild2'>
              <p className='create'>Create</p>
              <BiSolidPlusSquare/>
            </div>
        </div>
        <Bid/>
      </div>

    </div>
  )
}

export default App