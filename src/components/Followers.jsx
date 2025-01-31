import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import MainProfile from './MainProfile';

function Followers() {
  const [followers, setFollowers] = useState([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/Abubakrbro/followers')
      .then((res) => res.json())
      .then((data) => {
        setFollowers(data); 
        console.log(data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-section">
        <MainProfile />
        <div className="follower-par">
          <div className="follower-it">
            {followers.length > 0 ? (
              followers.map((follower) => (
                <div key={follower.id} className="follower">
                  <div className="follow-fl">
                  <img
                    src={follower.avatar_url}
                    alt={follower.login}
                    width="50"
                    height="50"
                  />
                  <h1>{follower.login}</h1> 
    
                  </div>
                 <button aria-label='unfollow'>Unfollow</button>
                </div>
              ))
            ) : (
              <p>No followers found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Followers;
