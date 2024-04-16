
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update local storage
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update local storage
    },
    toggleTask: (state, action) => {
      const taskIndex = action.payload;
      state.tasks[taskIndex] = {
        ...state.tasks[taskIndex],
        completed: !state.tasks[taskIndex].completed,
      };
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update local storage
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
