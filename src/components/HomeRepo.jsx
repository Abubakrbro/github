import React from "react";
import { useState, useEffect } from "react";

function HomeRepo() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/Abubakrbro/repos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRepos(data.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(repos);

  return (
    <div>
      <div className="home-repo-parent">
        <div className="home-repo-head">
          <h2>Popular repositories</h2>
          <a href="#">Customize your pins</a>
        </div>
        <div className="repos-parent">
          {repos.map((repo) => {
           
            return (
              <div className="repo-item" key={repo.id}>
                <div className="repo-it-head">
                  <a href="#" className="repo-link">{repo.name}</a>
                  <h2>{repo.visibility}</h2>
                </div>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeRepo;
