import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskData } from './task/task.domain';
import { CardComponent } from '../shared/card/card.component';
import { TaskService } from './task.service';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent, ],
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
