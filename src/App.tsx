import { useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import { Task } from "./interfaces/Task.interface";
import TaskList from "./components/TaskList";
import { Title } from "./interfaces/Title.interface";
import TaskForm from "./components/TaskForm";

function App({ title }: Title) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React + TS",
      description: "Learn REact + TS",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);
  };

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <>
      <div className="bg-dark vh-100 text-white">
        {/* Navbar */}
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img
                src={logo}
                alt="React Logo"
                className="pe-2"
                style={{ width: "4rem" }}
              />
              {title}
            </a>
          </div>
        </nav>

        <main className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={addNewTask} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <TaskList tasks={tasks} deleteTask={deleteTask} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
