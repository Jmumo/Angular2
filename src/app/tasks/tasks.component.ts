import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  constructor(private taskService : TaskService){
  }

  @Input({required : true})  name !: string
  @Input({required : true})  userId !: string


  isAddTask = false;

  onCancelAddTask(){
    this.isAddTask = false
  }

  getSelectedUSerTasks(){
    return this.taskService.getUserTasks(this.userId)
  }

  // onTaskComplete(id: string){
  //   this.taskService.onTaskComplete(id) 
  // }

  addnewTask(){
    this.isAddTask = true
  }


}
