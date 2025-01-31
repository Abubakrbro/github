import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainProfile from '../components/MainProfile'
import CreatePro from '../components/CreatePro'

function Project() {
  return (
    <div>
      <Navbar/>
      <div className="home-section">
        <MainProfile/>
        <CreatePro/>
      </div>
    </div>
  )
}

export default Project
