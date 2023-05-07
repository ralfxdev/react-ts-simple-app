import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { AddNewTask } from "../interfaces/AddNewTask.interface";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ addNewTask }: AddNewTask) {
  const [task, setTask] = useState(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
    inputTitle.current?.focus();
  };

  return (
    <div
      className="card card-body bg-secondary"
      style={{ borderRadius: "1rem" }}
    >
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3"
          style={{ borderRadius: "0.5rem" }}
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />
        <textarea
          name="description"
          placeholder="Write a description"
          rows={2}
          className="form-control mb-3"
          style={{ borderRadius: "0.5rem" }}
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-primary"
            style={{ borderRadius: "0.5rem" }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
