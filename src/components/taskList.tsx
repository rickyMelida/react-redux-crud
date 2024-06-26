import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };
  return (
    <>
      <div className="w-4/6">
        <header className="flex justify-between item-center py-4">
          <h2>Tasks {tasks.length}</h2>
          <Link
            to="/create-task"
            className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          >
            Create Task
          </Link>
        </header>
        <div className="grid grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3>{task.title}</h3>
                <div className="flex gap-x-2">
                  <Link to={`/edit-task/${task.id}`}
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  >Edit</Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 px-2 py-1 text-xs rounded selft-center"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
