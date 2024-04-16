// TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} />
      ))}
    </div>
  );
};

export default TaskList;
