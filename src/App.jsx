import React from 'react'
import "./styles/App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Repasitory from './pages/Repasitory'
import SearchResults from './components/SearchResults'
import Project from './pages/Project'
import Packages from './pages/Packages'
import Starts from './pages/Starts'
import Followers from './components/Followers'
import Following from './components/Following'

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Abubakrbro' element={<Home/>}/>
        <Route path="/repositories" element={<Repasitory/>}/>
        <Route path="/searchresults" element={<SearchResults/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/stars" element={<Starts/>} />
        <Route path='/followers' element={<Followers/>} />
        <Route path= "/following" element={<Following/>}/>
      </Routes>
    </div>
  )
}

export default App
