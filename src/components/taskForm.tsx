import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store/store";
import ITask from "../interfaces/ITask";

const TaskForm = () => {
  const taskDafault: ITask = {
    id: "",
    title: "",
    description: "",
    completed: false,
  };
  const tasks: ITask[] = useSelector((state: RootState) => state.tasks);
  const [task, setTask] = useState<ITask>(taskDafault);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);

      taskFound ? setTask(taskFound) : setTask(taskDafault);
    }
  }, [params.id, tasks]);

  const handleChange = (e: any) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    if (params.id) {
      dispatch(editTask(task));
    } else {
      e.preventDefault();
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor="title" className="block text-xs font-bold mb-1">Task:</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={task.title}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />
        <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
        <textarea
          name="description"
          id=""
          placeholder="description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-2 py-1">Save</button>
      </form>
    </>
  );
};

export default TaskForm;
