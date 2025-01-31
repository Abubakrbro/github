import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MainProfile from '../../components/MainProfile'
import HomeRepo from '../../components/HomeRepo'


function Home() {
  return (
    <div>
      <Navbar/>
      <div className='home-section'>
       <MainProfile/>
       <HomeRepo/>
      </div>
    </div>
  )
}

export default Home
