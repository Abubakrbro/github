import React, { useState, useEffect } from "react";
import repoline from "../assets/images/repoline.png";

function MainRepo({ setRepoCount }) {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/Abubakrbro/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setRepoCount(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setRepoCount]);

 
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="MainRepoWrap">
        <div className="MainRepoHead">
          <input
            type="text"
            placeholder="Find a repository..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>
            Type <i className="fa-solid fa-sort-down"></i>
          </button>
          <button>
            Language <i className="fa-solid fa-sort-down"></i>
          </button>
          <button>
            Sort <i className="fa-solid fa-sort-down"></i>
          </button>
          <button>
            <i className="fa-solid fa-book"></i> New
          </button>
        </div>
        <div className="MainRepoSec">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo) => (
              <div className="mainRepoItem" key={repo.id}>
                <div className="mainRepoCat">
                  <div className="mainRepoFl">
                    <a href="#">{repo.name}</a>
                    <p>{repo.visibility}</p>
                  </div>
                  <div className="repoBtns">
                    <button title="star-category">
                      <i className="fa-regular fa-star"></i> Star
                    </button>
                    <button className="down-category">
                      <i className="fa-solid fa-sort-down"></i>
                    </button>
                  </div>
                </div>
                <div className="mainRepoUnder">
                  <div className="mainRepoUnCat">
                    <h4>
                      <span
                        className="span-color"
                        style={{
                          backgroundColor:
                            repo.language === "HTML"
                              ? "#e34c26"
                              : repo.language === "CSS"
                              ? "#663399"
                              : "transparent",
                        }}
                      ></span>
                      {repo.language}
                    </h4>
                    <h2>Updated {new Date(repo.updated_at).toLocaleDateString()}</h2>
                  </div>
                  <div className="mainReImg">
                    <img src={repoline} alt="line" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No repositories found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainRepo;
