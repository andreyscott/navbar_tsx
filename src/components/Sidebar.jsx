import React from 'react'
import {BsPlus, BsFillTrashFill, BsGearFill, BsFillLightningFill } from 'react-icons/bs'
import {FaFire, FaPoo } from 'react-icons/fa'

// type Props = {
//     icon: (React.ReactElement | string)
//     text: string;
// };

export default function Sidebar() {
  return (
    <div className='fixed top-0 h-screen w-16 bg-gray-900 left-0 m-0 flex flex-col text-white shadow-xl '>
        <SidebarIcon  icon={<FaFire size="28" /> }/>
        <SidebarIcon icon={<BsPlus size="28" /> }/>
        <SidebarIcon icon={<BsFillLightningFill size="28" /> }/>
        <SidebarIcon icon={<FaPoo size="28" /> }/>
        
    </div>
  )
}

// create a sidebar component that takes in a prop called icon

const SidebarIcon = ({ icon, text = 'Toolkit test' }) => {
    return (
        <div className='side-style '>
        {icon}
     <span className='sidebar-tool group-hover:scale-100'>
     {text}
     </span>

        </div>
    )
    }