import React from "react";
import home from "../assets/images/home.png"
import discuss from "../assets/images/discuss.png"
import codepase from "../assets/images/codepase.png"
import proj from "../assets/images/proj.png"
import copilot from "../assets/images/copi.png"
import zoom from "../assets/images/zoom.png"
import prize from "../assets/images/prize.png"
import { useNavigate } from "react-router-dom";

const Modal = ({ toggleModal }) => {
  const Navigate = useNavigate("")
  function toHome(){
    Navigate("/")
  }
  return (
    <>
      <div className="overlay" onClick={toggleModal}></div>

      <div className="modal">
        <div className="modal-top">
          <i className="fa-brands fa-github" id="nav-git"></i>
          <button className="close-btn" onClick={toggleModal}>
            &times;
          </button>
        </div>
        <div className="modal-links">
          <div className="modal-link" onClick={toHome}><img src={home} alt=""/><h2>Home</h2></div>
          <div className="modal-link"><i className="fa-regular fa-circle-dot"></i><h2>Issues</h2></div>
          <div className="modal-link"><i className="fa-solid fa-code-pull-request"></i><h2>Pull requests</h2></div>
          <div className="modal-link"><img src={proj} alt="" /><h2>Projects</h2></div>
          <div className="modal-link"><img src={discuss} alt="" /><h2>Discussions</h2></div>
          <div className="modal-link"><img src={codepase} alt="" /><h2>Codespaces</h2></div>
          <div className="modal-link"><img src={copilot} alt="" /><h2>Copilot</h2></div>
        </div>
        <div className="modal-lines"></div>
        <div className="modal-linkse">
            <div className="modal-link"><img src={zoom} alt="" /><h2>Explore</h2></div>
            <div className="modal-link"><img src={prize} alt="" /><h2>Marketplace</h2></div>
        </div>
        <div className="modal-lines"></div>
        <div className="repastory-par">
            <h3>Repasitories</h3>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default Modal;
