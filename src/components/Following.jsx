import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import MainProfile from './MainProfile';

function Following() {
  const [following, setFollowing] = useState([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/Abubakrbro/following') 
      .then((res) => res.json())
      .then((data) => {
        setFollowing(data); 
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
        <div className="following-par">
          <div className="following-it">
            {following.length > 0 ? (
              following.map((followedUser) => (
                <div key={followedUser.id} className="follower">
                  <div className="follow-fl">
                    <img
                      src={followedUser.avatar_url}
                      alt={followedUser.login}
                      width="50"
                      height="50"
                    />
                    <h1>{followedUser.login}</h1>
                  </div>
                  <button>Unfollow</button>
                </div>
              ))
            ) : (
              <p>No users found that you are following.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Following;
