import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  tasks: [],
};

let taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    handleCheckbox: (state, action) => {
      const { index } = action.payload;
      const updatedTasks = [...state.tasks];
      updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
      state.tasks = updatedTasks;
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addTask, handleCheckbox, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
