import React from "react";
import PropTypes from "prop-types";

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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
