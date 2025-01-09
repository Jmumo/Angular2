import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { taskData } from "./taskData.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService{

   private  tasks = signal<Task []>([])

    allTasks = this.tasks.asReadonly()


    onAddTask(taskData : taskData){

        const newTask : Task = {
            ...taskData,
            id : Math.random().toString(),
            status: 'OPEN'
        }
       this.tasks.update((oldTasks => [...oldTasks , newTask]))
    }


    updateTaskStatus(taskId : string , newStatus : TaskStatus){

        this.tasks.update((oldtasks)=>oldtasks.map((task) =>task.id === taskId ? {...task, status : newStatus}: task))
   }

}