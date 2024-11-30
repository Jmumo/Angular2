import { Component, EventEmitter, inject, Inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../task/task.domain';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private taskService = inject(TaskService)

  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string


  onCancelTask(){
    this.close.emit()
  }

  enteredTitle = '';
  summary = '';
  DueDate = '';

  submitForm(){

    this.taskService.onAddNewTask(
      {
        enteredTitle : this.enteredTitle,
        summary: this.summary,
        DueDate: this.DueDate,
      }, this.userId

    )
    this.close.emit()
    
  }



}
