import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import copilot from '../../assets/images/copilot.png';
import notification from '../../assets/images/notification.png';
import proj from "../../assets/images/proj.png";
import bookmark from '../../assets/images/bookmark.png';
import overview from "../../assets/images/overview.png";
import Modal from '../Modal';
import Search from '../Search';
import users from "../../assets/images/users.png";
import ProModal from "../ProModal"

function Navbar({ repoCount }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpens, setIsModalOpens] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation(); 

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModals = () => {
    setIsModalOpens(!isModalOpens);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-top">
          <div className="logos">
            <div className="nav-bar" onClick={toggleModal}>
              <div></div> 
              <div></div> 
              <div></div> 
            </div>
            {isModalOpen && <Modal toggleModal={toggleModal} />}
            <i className="fa-brands fa-github" id='nav-git'></i>
            <h1>Abubakrbro</h1>
          </div>
          <div className="menus">
            {isSearchOpen && <Search toggleSearch={toggleSearch}/>}
            <div className="nav-input" onClick={toggleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <div className="input-text">
                <div>Type <div className="slash"><span>/</span></div> to search</div>
              </div>
            </div>
            <div className="copilot-btns">
              <button><img src={copilot} alt="s" /></button>
              <button><i className="fa-solid fa-sort-down"></i></button>
            </div>
            <div className='lines'></div>
            <button className='btn-pls'>+ <i className="fa-solid fa-chevron-down"></i></button>
            <button className='issue-btn'><i className="fa-regular fa-circle-dot"></i></button>
            <button className='request-btn'><i className="fa-solid fa-code-pull-request"></i></button>
            <button className='noti-icon'><img src={notification} alt="noti" /></button>
            {isModalOpens && <ProModal toggleModals={toggleModals} />}
            <div className="profile-img" onClick={toggleModals}>
              <img src={users} alt="" />
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            <Link to="/Abubakrbro" className={location.pathname === "/Abubakrbro" ? "active" : ""}>
              <img src={overview} alt="" /> Overview
            </Link>
            <Link to="/repositories" className={location.pathname === "/repositories" ? "active" : ""}>
              <img src={bookmark} alt="" /> Repositories <span className='repoSpan'>{repoCount ? repoCount + 1 : 14}</span>

            </Link>
            <Link to="/project" className={location.pathname === "/projects" ? "active" : ""}>
              <img src={proj} alt="" /> Projects
            </Link>
            <Link to="/packages" className={location.pathname === "/packages" ? "active" : ""}>
              <i className="fa-solid fa-cube"></i> Packages
            </Link>
            <Link to="/stars" className={location.pathname === "/stars" ? "active" : ""}>
              <i className="fa-regular fa-star"></i> Stars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
