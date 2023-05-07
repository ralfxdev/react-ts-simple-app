import { Task } from "./Task.interface";

export interface TaskListIF {
    tasks: Task[];
    deleteTask: (id: number) => void
}