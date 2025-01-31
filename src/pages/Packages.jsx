import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainProfile from '../components/MainProfile'
import Pack from '../components/Pack'

function Packages() {
  return (
    <div>
      <Navbar/>
      <div className="home-section">
        <MainProfile/>
        <Pack/>
      </div>
    </div>
  )
}

export default Packages
