import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ITask from "../../interfaces/ITask";

const initialState: ITask[] = [
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
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload);
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      const { id, title, description } = action.payload;
      const taskFound = state.find((task) => task.id === id);

      if (taskFound) {
        taskFound.description = description;
        taskFound.title = title;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
