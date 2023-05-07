import { OneTask } from "../interfaces/OneTask.interface";

export default function TaskCard({ task, deleteTask }: OneTask) {
  return (
    <>
      <div className="card card-body" style={{ borderRadius: "1rem" }}>
        <h2>{task.title}</h2>
        <p>{task.id}</p>
        <p>{task.description}</p>
        <div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-danger"
              style={{ borderRadius: "0.5rem" }}
              onClick={() => task.id && deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
