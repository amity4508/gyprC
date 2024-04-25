import React from 'react'
import { Navbar, menuItems } from '../Navbar/Navbar'
import { Home } from '../../pages/Home/Home'

export const  LandingPLayouts =() => {
  return (
    <div>
        {/* <Navbar/> */}
        <Navbar menuItems={menuItems} />

        <Home/>
      
    </div>
  )
}


