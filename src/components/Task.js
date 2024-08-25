import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          {task.text}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
