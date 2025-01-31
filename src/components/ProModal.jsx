import React from "react";
import home from "../assets/images/home.png"
import discuss from "../assets/images/discuss.png"
import codepase from "../assets/images/codepase.png"
import proj from "../assets/images/proj.png"
import copilot from "../assets/images/copi.png"
import users from "../assets/images/users.png"

const Modal = ({ toggleModals }) => {
  return (
    <>
      <div className="overlays" onClick={toggleModals}></div>

      <div className="modals">
        <div className="modal-tops">
            <div className="mo-flex">
            <img src={users} alt="" />
            <h2>Abubakrbro</h2>
            </div>
          <button className="close-btns" onClick={toggleModals}>
            &times;
          </button>
        </div>
        <div className="modal-linkss">
          <div className="modal-linker"><i className="fa-regular fa-face-smile"></i><h2>Set status</h2></div>
          <div className="myproline"></div>
          <div className="modal-linker"><i className="fa-regular fa-user"></i><h2>Your profile</h2></div>
          <div className="modal-linker"><i class="fa-solid fa-book"></i><h2>Your repasitories</h2></div>
          <div className="modal-linker"><img src={copilot} alt="" /><h2>Your copilot</h2></div>
          <div className="modal-linker"><i class="fa-regular fa-window-maximize"></i><h2>Your projects</h2></div>
          <div className="modal-linker"><i class="fa-regular fa-star"></i><h2>Your Stars</h2></div>
          <div className="modal-linker"><i class="fa-solid fa-code"></i><h2>Your gifts</h2></div>
          <div className="modal-linker"><i class="fa-solid fa-building"></i><h2>Your organizations</h2></div>
          <div className="modal-linker"><i class="fa-solid fa-globe"></i><h2>Your enterpries</h2></div>
          <div className="modal-linker"><i class="fa-regular fa-heart"></i><h2>Your sponsors</h2></div>
        </div>
        <div className="myproline"></div>
      
      </div>
    </>
  );
};

export default Modal;
