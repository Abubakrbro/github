import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainProfile from '../components/MainProfile'
import Lists from '../components/Lists'

function Starts() {
  return (
    <div>
      <Navbar/>
      <div className="home-section">
        <MainProfile/>
        <Lists/>
      </div>
    </div>
  )
}

export default Starts
