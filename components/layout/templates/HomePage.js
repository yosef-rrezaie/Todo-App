import React, { useEffect, useState } from "react";

function HomePage({ data }) {
  const [todos, setTodos] = useState(data);

  return (
    <div className="home-page">
      <div className="home-page--todo">
        <p>Todo</p>
      </div>
      <div className="home-page--inProgress">
        <p>In Progress</p>
      </div>
      <div className="home-page--review">
        <p>Review</p>
      </div>
      <div className="home-page--done">
        <p>Done</p>
      </div>
    </div>
  );
}

export default HomePage;
