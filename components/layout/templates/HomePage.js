import React, { useEffect, useState } from "react";
import Task from "../modules/Task";

function HomePage({ data }) {
  const [todos, setTodos] = useState(data);
  console.log(todos);

  return (
    <div className="home-page">
      <div className="home-page--todo">
        <p>Todo</p>
        {todos.todo && <Task data={todos.todo} next="inProgress" />}
      </div>
      <div className="home-page--inProgress">
        <p>In Progress</p>
        {todos.inProgress && <Task data={todos.inProgress} next="review" back="todo" />}
      </div>
      <div className="home-page--review">
        <p>Review</p>
        {todos.review && <Task data={todos.review} next="done" back="inProgress" />}
      </div>
      <div className="home-page--done">
        <p>Done</p>
        {todos.done && <Task data={todos?.done} back="review" />}
      </div>
    </div>
  );
}

export default HomePage;
