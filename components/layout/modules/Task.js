import { useRouter } from "next/router";
import React from "react";
import { RiMastodonLine } from "react-icons/ri";

function Task({ data, next, back }) {
  const router = useRouter();
  async function changeStatus(id, status) {
    const res = await fetch("/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") router.reload();
  }
  return (
    <div className="tasks">
      {data.map((i) => (
        <div key={i._id} className="tasks__card">
          <span className={i.status}></span>
          <RiMastodonLine />
          <h4>{i.title}</h4>
          <div>
            {back ? (
              <button
                className="button-back"
                onClick={() => changeStatus(i._id, back)}
              >
                Back
              </button>
            ) : null}
            {next ? (
              <button
                className="button-next"
                onClick={() => changeStatus(i._id, next)}
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task;
