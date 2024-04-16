
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className="container">
      <h1>To-Do App</h1>
      <div className="task-input-container">
        <TaskInput />
      </div>
      <div className="task-list-container">
        <TaskList />
      </div>
    </div>
  </Provider>
);
