import { Component, input, signal } from '@angular/core';
import { Ticket } from '../new-ticket/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data = input.required<Ticket>()

  dataVisible = signal(true);


  onToggleDetails(){
    // this.dataVisible.set(!this.dataVisible)

    this.dataVisible.update((dataVisible)=> !dataVisible)
  }

}
