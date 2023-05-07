import { Task } from "./Task.interface";

export interface AddNewTask {
    addNewTask: (task: Task) => void;
}