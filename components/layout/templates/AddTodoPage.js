import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";

function AddTodoPage({ session }) {
  console.log("session :", session.user.email);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const router = useRouter();

  
  async function clickHandler() {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, status, email: session.user.email}),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "failed") {
      toast.error("Please enter title");
    }
    if (data.status === "success") {
      setStatus("todo");
      setTitle("");
      toast.success("Todo added");
    }
  }

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
        <button onClick={clickHandler}>Add</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddTodoPage;


