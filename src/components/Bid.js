import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { HiMiniArrowSmallDown } from "react-icons/hi2";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { RiBusFill } from "react-icons/ri";
import { BsFillBoxFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";



import './Bid.css'

const Bid = () => {
   
    const [selectedId,setSelectedId]=useState("")

    const bids = [
        {
            id: 1,
            createdBy:{
              id:"#12345678123",
              name:"Sundar Yadav"
            },
            startDateTime: {
              date:"14/02/2024",
              time:"5:40Pm"
            },
            bidTime: '7hr 20min',
            fromCity: 'Gurgaon',
            toCity: 'Mumbai',
            vehicleType: 'Truck, 20 ft  Close body,1',
            vehicleBody: 'Close body',
            numVehicles: 1,
            bidNumber: '#122345678123',
            assignedStaff: {
              name:"Mohit",
              id:"5215001161264"
            },
            materialWeight: "4000 kg",
            response:4,
  
            moreDetails:{
              loadingPoint: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
              unloadingPoint: 'Manesar, Gurugram',
              bidNumber: '16515120650125',
              createdBy: 'Sunder Yadav',
              numBidders: 54,
              targetPrice: 5000,
              assignedStaff: 'Rahul Pandey',
              phoneNumber: '+91 332423442442',
              vehicleLoadingDate: '2024-02-17',
              vehicleType: '20 ft Truck (Close Body)',
              fuelType: 'CNG',
              material: 'Agricultural Products',
              materialWeight: "14 Tonnes",
              requestDate: '2024-02-15',
              expiryDate: '2024-02-15',
              remarks: 'Urgent Delivery',
              destination:"Kotaputli",
              dist:"Rajasthan"
            }
          },
          
          {
            id: 1,
            createdBy:{
              id:"#12345678123",
              name:"Sundar Yadav"
            },
            startDateTime: {
              date:"14/02/2024",
              time:"5:40Pm"
            },
            bidTime: '7hr 20min',
            fromCity: 'Gurgaon',
            toCity: 'Mumbai',
            vehicleType: 'Truck, 20 ft  Close body,1',
            vehicleBody: 'Close body',
            numVehicles: 1,
            bidNumber: '#122345678123',
            assignedStaff: {
              name:"Mohit",
              id:"5215001161264"
            },
            materialWeight: "4000 kg",
            response:4,
  
            moreDetails:{
              loadingPoint: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
              unloadingPoint: 'Manesar, Gurugram',
              bidNumber: '16515120650125',
              createdBy: 'Sunder Yadav',
              numBidders: 54,
              targetPrice: 5000,
              assignedStaff: 'Rahul Pandey',
              phoneNumber: '+91 332423442442',
              vehicleLoadingDate: '2024-02-17',
              vehicleType: '20 ft Truck (Close Body)',
              fuelType: 'CNG',
              material: 'Agricultural Products',
              materialWeight: "14 Tonnes",
              requestDate: '2024-02-15',
              expiryDate: '2024-02-15',
              remarks: 'Urgent Delivery',
              destination:"Kotaputli",
              dist:"Rajasthan"
            }
          },
          {
            id: 1,
            createdBy:{
              id:"#12345678123",
              name:"Sundar Yadav"
            },
            startDateTime: {
              date:"14/02/2024",
              time:"5:40Pm"
            },
            bidTime: '7hr 20min',
            fromCity: 'Gurgaon',
            toCity: 'Mumbai',
            vehicleType: 'Truck, 20 ft  Close body,1',
            vehicleBody: 'Close body',
            numVehicles: 1,
            bidNumber: '#122345678123',
            assignedStaff: {
              name:"Mohit",
              id:"5215001161264"
            },
            materialWeight: "4000 kg",
            response:4,
  
            moreDetails:{
              loadingPoint: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
              unloadingPoint: 'Manesar, Gurugram',
              bidNumber: '16515120650125',
              createdBy: 'Sunder Yadav',
              numBidders: 54,
              targetPrice: 5000,
              assignedStaff: 'Rahul Pandey',
              phoneNumber: '+91 332423442442',
              vehicleLoadingDate: '2024-02-17',
              vehicleType: '20 ft Truck (Close Body)',
              fuelType: 'CNG',
              material: 'Agricultural Products',
              materialWeight: "14 Tonnes",
              requestDate: '2024-02-15',
              expiryDate: '2024-02-15',
              remarks: 'Urgent Delivery',
              destination:"Kotaputli",
              dist:"Rajasthan"
            }
          },
          {
            id: 1,
            createdBy:{
              id:"#12345678123",
              name:"Sundar Yadav"
            },
            startDateTime: {
              date:"14/02/2024",
              time:"5:40Pm"
            },
            bidTime: '7hr 20min',
            fromCity: 'Gurgaon',
            toCity: 'Mumbai',
            vehicleType: 'Truck, 20 ft  Close body,1',
            vehicleBody: 'Close body',
            numVehicles: 1,
            bidNumber: '#122345678123',
            assignedStaff: {
              name:"Mohit",
              id:"5215001161264"
            },
            materialWeight: "4000 kg",
            response:4,
  
            moreDetails:{
              loadingPoint: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
              unloadingPoint: 'Manesar, Gurugram',
              bidNumber: '16515120650125',
              createdBy: 'Sunder Yadav',
              numBidders: 54,
              targetPrice: 5000,
              assignedStaff: 'Rahul Pandey',
              phoneNumber: '+91 332423442442',
              vehicleLoadingDate: '2024-02-17',
              vehicleType: '20 ft Truck (Close Body)',
              fuelType: 'CNG',
              material: 'Agricultural Products',
              materialWeight: "14 Tonnes",
              requestDate: '2024-02-15',
              expiryDate: '2024-02-15',
              remarks: 'Urgent Delivery',
              destination:"Kotaputli",
              dist:"Rajasthan"
            }
          },
          {
            id: 1,
            createdBy:{
              id:"#12345678123",
              name:"Sundar Yadav"
            },
            startDateTime: {
              date:"14/02/2024",
              time:"5:40Pm"
            },
            bidTime: '7hr 20min',
            fromCity: 'Gurgaon',
            toCity: 'Mumbai',
            vehicleType: 'Truck, 20 ft  Close body,1',
            vehicleBody: 'Close body',
            numVehicles: 1,
            bidNumber: '#122345678123',
            assignedStaff: {
              name:"Mohit",
              id:"5215001161264"
            },
            materialWeight: "4000 kg",
            response:4,
  
            moreDetails:{
              loadingPoint: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
              unloadingPoint: 'Manesar, Gurugram',
              bidNumber: '16515120650125',
              createdBy: 'Sunder Yadav',
              numBidders: 54,
              targetPrice: 5000,
              assignedStaff: 'Rahul Pandey',
              phoneNumber: '+91 332423442442',
              vehicleLoadingDate: '2024-02-17',
              vehicleType: '20 ft Truck (Close Body)',
              fuelType: 'CNG',
              material: 'Agricultural Products',
              materialWeight: "14 Tonnes",
              requestDate: '2024-02-15',
              expiryDate: '2024-02-15',
              remarks: 'Urgent Delivery',
              destination:"Kotaputli",
              dist:"Rajasthan"
            }
          },
          {
            id: 1,
            createdBy:{
              id:"#12345678123",
              name:"Sundar Yadav"
            },
            startDateTime: {
              date:"14/02/2024",
              time:"5:40Pm"
            },
            bidTime: '7hr 20min',
            fromCity: 'Gurgaon',
            toCity: 'Mumbai',
            vehicleType: 'Truck, 20 ft  Close body,1',
            vehicleBody: 'Close body',
            numVehicles: 1,
            bidNumber: '#122345678123',
            assignedStaff: {
              name:"Mohit",
              id:"5215001161264"
            },
            materialWeight: "4000 kg",
            response:4,
  
            moreDetails:{
              loadingPoint: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
              unloadingPoint: 'Manesar, Gurugram',
              bidNumber: '16515120650125',
              createdBy: 'Sunder Yadav',
              numBidders: 54,
              targetPrice: 5000,
              assignedStaff: 'Rahul Pandey',
              phoneNumber: '+91 332423442442',
              vehicleLoadingDate: '2024-02-17',
              vehicleType: '20 ft Truck (Close Body)',
              fuelType: 'CNG',
              material: 'Agricultural Products',
              materialWeight: "14 Tonnes",
              requestDate: '2024-02-15',
              expiryDate: '2024-02-15',
              remarks: 'Urgent Delivery',
              destination:"Kotaputli",
              dist:"Rajasthan"
            }
          },
      ];


  return (
    <div className='bidContainer'>
        <div className='categoriesCont'>
        <div className='categories'>
            <p className='live'>Live{"(30)"}</p>
            <p className='resp'>Responded{"(30)"}</p>
            <p className='unresp'>Unresponded{"(30)"}</p>
        </div>
        <div className='categories'>
            <p className='category'>Bid Created</p>
            <p className='category'>Today</p>
            <p className='category'>Yesterday</p>
            <select className='calender'>
                <option>Calender</option>
            </select>
            <FaFilter className='filter'/>
        </div>
        </div>
        <div className='headersCont'>
            <p className='psno'>S No.</p>
            <p className='p'>Bid Number Created By</p>
            <p className='p'>Start Date & Time</p>
            <p className='p'>Bid Time Remaining</p>
            <p className='p'>From City To City</p>
            <p className='p'>Vehicle Type. size Body.No.of Vehicle</p>
            <p className='p'>Material weight {"(in kg)"}</p>
            <p className='p'>Response</p>
            <p className='p'>Assigned Staff</p>
            <p className='p'>Details</p>
        </div>
        {bids.map((each,index)=>(
            <div className='rowsCont'>
                   <div className='row' key={index}>
                    <div className='dotCont'>
                     <p className='dot'></p>   
                    <p className='sno'>{each.id}</p>
                    </div>
                    <div className='div'><p className='rowItem'>{each.createdBy.id}</p> <p className='down'>{each.createdBy.name}</p></div>
                    <div className='div'>
                    <p className='rowItem'>{each.startDateTime.date}</p>
                    <p className='down'>{each.startDateTime.time}</p>
                    </div>
                    <p className='rowItem'>{each.bidTime}</p>
                    <div className='adiv'>
                    <p className='rowItem'>{each.fromCity}</p>
                    <HiMiniArrowSmallDown/>
                    <p className='rowItem'>{each.toCity}</p>
                    </div>
                    <p className='rowItem'>{each.vehicleType}</p>
                    <p className='rowItem'>{each.materialWeight}</p>
                    <div  className='adiv'>
                    <p className='rowItem'>{each.response}</p>
                    <p className='rowItem view'>View Results</p>
                    </div>
                    <div className='adiv'>
                    <p className='rowItem'>{each.assignedStaff.name}</p>
                    <p className='rowItem down'>{each.assignedStaff.id}</p>

                    </div>
                    <p className='rowItem view' onClick={()=>setSelectedId(index)}>View Details</p>
                   </div>
                   {selectedId===index?(<div className='moreDetailsCont'>
                        <div className='mdc1'>
                            <p className='bidno'>Bid No: <span className='spanid'>{each.moreDetails.bidNumber}<span className='bracket'>{`(${each.moreDetails.createdBy})`}</span></span></p>
                            <div className='mdc12'>
                                <div className='side'>
                                    <div className='dot2'></div>
                                    <div className='line'></div>
                                    <FaMapMarkerAlt className='map'/>
                                </div>
                                <div className='locations'>
                                    <div className='loc'>
                                        <p className='view'>{`${each.moreDetails.unloadingPoint},`}<span className='dist'> Haryana</span></p>
                                        <p className='loading'>Loading Point: <span className='loadspan'>{each.moreDetails.loadingPoint}</span></p>
                                    </div>

                                    <div className='loc'> 
                                        <p className='view'>{`${each.moreDetails.destination}, `}<span className='dist'>{each.moreDetails.dist}</span></p>
                                        <p className='unloading'>Unloading Point: <span className='loadspan'>{each.moreDetails.loadingPoint}</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='mdc2'>
                        <IoCalendarClear /><p className='vld'>{`Vehicle loading date: ${each.moreDetails.vehicleLoadingDate}`}</p>
                           <div className='vehicle'>
                            <RiBusFill className='icon'/><p className='vehicles'>Vehicle Type: <span className='type'>{each.moreDetails.vehicleType}</span></p>
                           </div>
                           <p className='cng'>CNG</p>
                           
                           <div className='vehicle'>
                            <BsFillBoxFill className='icon'/>
                            <p className='vehicles'>Material: <span className='type'>{each.moreDetails.material}</span></p>
                           </div>
                           <div className='vehicle'>
                            <p className='vehicles'>Weight: <span className='type'>{each.moreDetails.materialWeight}</span></p>
                           </div>
                           <div className='vehicle'>
                            <IoCalendarClear className='icon'/>
                            <p className='vehicles'>Vehicle Type: <span className='type'>{each.moreDetails.requestDate}</span></p>
                           </div>
                           <div className='vehicle'>
                           <IoCalendarClear className='icon'/>
                            <p className='vehicles'>Expiry Date: <span className='type'>{each.moreDetails.expiryDate}</span></p>
                           </div>
                           <p className='vehicles'>Remarks: <span className='type'>{each.moreDetails.remarks}</span></p>
                        </div>
                        <div className='mdc2'>
                        <div className='vehicle'>
                            <FaUser className='icon'/>
                            <p className='vehicles'>Assigned Staff: <span className='type'>{each.moreDetails.assignedStaff}</span></p>
                           </div>
                           <div className='vehicle'>
                            <MdLocalPhone className='icon'/>
                            <p className='vehicles'>Phone Number: <span className='type'>{each.moreDetails.phoneNumber}</span></p>
                           </div>
                           <p>Target Price: <span className='type'>{each.moreDetails.targetPrice}</span></p>
                           <p className='vehicles'>Number of Bider for this Bid: <span className='type'>{each.moreDetails.numBidders}</span></p>
                           <p className='type'>View Details</p>
                           <div className='viewless' onClick={()=>setSelectedId("")}>
            
                            <p className='vehicles' >View less</p>
                            <BiSolidUpArrow className='iconz'/>
                           </div>
                        </div>
                   </div>):""}
            </div>
        ))}
    </div>
  )
}

export default Bid