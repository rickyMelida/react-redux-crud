import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 description",
    completed: false,
  },
];
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
