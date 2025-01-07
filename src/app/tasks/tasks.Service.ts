import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";
import { taskData } from "./taskData.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService{

    tasks = signal<Task []>([])


    onAddTask(taskData : taskData){

        const newTask : Task = {
            ...taskData,
            id : Math.random().toString(),
            status: 'OPEN'
        }
       this.tasks.update((oldTasks => [...oldTasks , newTask]))
    }

}