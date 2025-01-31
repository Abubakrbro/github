import React from 'react'
import proj from "../assets/images/proj.png"

function CreatePro() {
  return (
    <div>
      <div className="CreateProPar">
        <img src={proj} alt="" />
        <h2>Create your first GitHub project</h2>
        <h3>Projects are a customizable, flexible tool for planning and tracking your work.</h3>
        <button>New project</button>
      </div>
    </div>
  )
}

export default CreatePro
