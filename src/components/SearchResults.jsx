import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';

function SearchResults() {
  const [users, setUsers] = useState([])

  
  useEffect(() => {
    if (inputValue.trim() === "") return;

    fetch(`https://api.github.com/search/users?q=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items || []);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default SearchResults
