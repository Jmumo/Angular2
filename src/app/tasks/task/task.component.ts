import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.domain';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task !: Task
  private taskService = inject(TaskService)


onComplete(){ 
   this.taskService.onTaskComplete(this.task.id)
}

}
