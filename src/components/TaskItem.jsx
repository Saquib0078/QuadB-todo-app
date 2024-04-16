import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../app/slices/tasksSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import check circle icon
import './TaskList.css';

const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(index));

    // Remove task from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const handleToggleTask = () => {
    dispatch(toggleTask(index));

    // Update task in local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={handleToggleTask}>
        {task.text}
      </span>
      <button onClick={handleRemoveTask}>
        <DeleteIcon className="delete-icon" />
      </button>
      <button onClick={handleToggleTask}>
        <CheckCircleIcon color={task.completed ? 'primary' : 'disabled'} />
      </button>
    </div>
  );
};

export default TaskItem;
