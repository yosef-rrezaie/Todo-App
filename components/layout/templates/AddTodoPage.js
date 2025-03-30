import React, { useEffect, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";

function AddTodoPage() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  return (
    <div className="add-form">
      <h2>
        <GrAddCircle />
        Add New Todo
      </h2>
      <div className="add-form__input">
        <div className="add-form__input--first">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="add-form__input--second">
          <div className="todo">
            <label htmlFor="todo">
              <BsAlignStart />
              todo
            </label>
            <input
              type="radio"
              id="todo"
              value="todo"
              checked={status === "todo"}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="inProgress">
            <label htmlFor="inProgress">
              <FiSettings />
              in Progress
            </label>
            <input
              type="radio"
              id="inProgress"
              value="inProgress"
              checked={status === "inProgress"}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="review">
            <label htmlFor="review">
              <AiOutlineFileSearch />
              Review
            </label>
            <input
              type="radio"
              id="review"
              value="review"
              checked={status === "review"}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="done">
            <label htmlFor="done">
              <MdDoneAll />
              Done
            </label>
            <input
              type="radio"
              id="done"
              value="done"
              checked={status === "done"}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>
        <button>Add</button>
      </div>
    </div>
  );
}

export default AddTodoPage;
