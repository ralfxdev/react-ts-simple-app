import { Task } from "./Task.interface";

export interface OneTask {
    task: Task;
    deleteTask: (id: number) => void;
}