import { TaskListIF } from "../interfaces/TaskListIF.interface";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, deleteTask }: TaskListIF) {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-4 pb-3">
          <TaskCard task={task} deleteTask={deleteTask} key={task.id} />
        </div>
      ))}
    </>
  );
}
