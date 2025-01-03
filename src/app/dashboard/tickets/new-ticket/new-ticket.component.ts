import { Component, EventEmitter, output, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from './ticket.model';


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // @Output() add = new EventEmitter()

  add = output<{title:string,text:string}>()


onSubmit(title : string,
         textArea : string,
         form:HTMLFormElement
){
  this.add.emit({title : title, text : textArea})
  form.reset()
}

}
