import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTask(task));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          id=""
          placeholder="description"
          onChange={handleChange}
        ></textarea>
        <button>Save</button>
      </form>
    </>
  );
};

export default TaskForm;
