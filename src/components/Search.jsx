import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import repasitories from "../assets/images/repasitories.png";
import SearchResults from "./SearchResults";

function Search({ toggleSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const clearInput = () => {
    setInputValue(""); 
  };

  function toHome() {
    navigate("/Abubakrbro");
    toggleSearch(false);
  }

  function toResult(e) {
    e.preventDefault();  
    navigate("/searchresults")
  }

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
  }, [inputValue]);


console.log(users);
console.log(inputValue);
  return (
    <div className="search-wrap">
      <div className="search-overlay" onClick={toggleSearch}></div>
      

      <form className="search-parent" onSubmit={toResult}>
        <i className="fa-solid fa-magnifying-glass"></i>

        <i
          className="fa-solid fa-circle-xmark"
          onClick={clearInput} 
          style={{ cursor: "pointer" }}
        ></i>
        
        <input
          type="text"
          placeholder="owner: Abubakrbro"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          style={{ color: inputValue === "" ? "#5399E7" : "black" }}
        />

        <button type="submit" style={{ display: "none" }} title="submit"></button> 

        <div className="owners">
          <div className="owner-search">
            <p className="showListened">{inputValue}</p>
          </div>
          <h3>Owners</h3>
          <div className="ow-cat-par">
            <div className="own-cat-flex" onClick={toHome}>
              <div className="owners-cat">
                <img src={repasitories} alt="repo" />
                <h2>Abubakrbro</h2>
              </div>
              <a href="#">Jump to</a> 
            </div>
            <div className="own-cat-flex">
              <div className="owners-cat">
                <img src={repasitories} alt="repo" />
                <h2>salohiddinovAsadbek</h2>
              </div>
              <a href="#">Jump to</a> 
            </div>
            {users.map(user=>{
              return(
               <div className="own-cat-api" key={user.id}>
                <div className="owmyfl">
                <img src={user.avatar_url} alt="avatar" />
                <h1>{user.login}</h1>
                </div>
                <a href="#">Jump to</a> 
               </div>
              )
            })}
          </div>
        </div>
               


      </form>
    </div>
  );
}

export default Search;
