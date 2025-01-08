import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.Service';
import { TaskStatus } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(private taskService: TaskService){

  }

  onAddTask(title: string, description: string) {


    this.taskService.onAddTask({title:title,description:description})
    this.formEl()?.nativeElement.reset();
  }


  updateTaskStatus(taskId : string , newStatus : TaskStatus){
       this.taskService.tasks.update((oldtasks)=>oldtasks.map((task) =>task.id === taskId ? {...task, status : newStatus}: task))
  }
}
