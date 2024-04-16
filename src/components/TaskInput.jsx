import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../app/slices/tasksSlice';

const TaskInput = () => {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim()) {
      dispatch(addTask({ text: taskInput, completed: false }));
      setTaskInput('');
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        style={styles.input}
      />
      <button
        onClick={handleAddTask}
        style={styles.button}
      >
        Add Task
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    marginRight: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TaskInput;


