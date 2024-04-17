import { useSelector } from "react-redux";
import { RootState } from "../app/store/store";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  console.log(tasks);

  return (
    <>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
