import React from "react";

function Lists() {
  return (
    <div>
      <div className="listWrap">
        <div className="listHead">
          <h2>List (0)</h2>
          <div className="list-btns">
            <button title="sort">
              Sort <i className="fa-solid fa-sort-down"></i>
            </button>
            <button title="create-list">Create list</button>
          </div>
        </div>
        <div className="listPar">
          <i className="fa-regular fa-star"></i>
          <h2>Create your first list</h2>
          <p>Lists make it easier to organize and curate repositories that you have starred. <span>Create your list</span></p>
        </div>
      </div>
    </div>
  );
}

export default Lists;
