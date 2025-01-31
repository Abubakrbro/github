import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MainProfile() {
    const [myProfile, setMyProfile] = useState("")

    useEffect(()=>{
        fetch(`https://api.github.com/users/Abubakrbro`)
        .then((res =>{
          return res.json()
        }))
        .then((data)=>{
          setMyProfile(data)
          console.log(data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }, [])

      console.log(myProfile);

  return (
    <div>
      <div className="mainProWrapper">
        <img src={myProfile.avatar_url} alt="" />
        <h1>{myProfile.login}</h1>
        <button>Edit profile</button>
        <div className="followers">
            <i className="fa-solid fa-users"></i>
            <Link to="/followers">{myProfile.followers} follower</Link>
            <Link to="/following">{myProfile.following} following</Link>
        </div>
        <div className="mypro-line"></div>
        <div className="organizations">
            <h2>Organizations</h2>
            <img src={myProfile.avatar_url} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainProfile
