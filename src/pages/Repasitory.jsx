import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainProfile from '../components/MainProfile'
import MainRepo from '../components/MainRepo'
import { useState } from 'react'

function Repasitory() {
  const [repoCount, setRepoCount] = React.useState(0);
  return (
    <div>
      <Navbar repoCount={repoCount}/>
      <div className="home-section">
        <MainProfile/>
        <MainRepo setRepoCount={setRepoCount}/>
      </div>
    </div>
  )
}

export default Repasitory
