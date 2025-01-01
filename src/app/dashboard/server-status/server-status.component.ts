import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown'  = 'online';

  constructor(){
   
  }

  ngOnInit(){
    setInterval(() => {
      const rnd = Math.random()

      if (rnd < 0.5){
        this.currentStatus = 'offline'
      }else if (rnd < 0.9){
        this.currentStatus = 'online'
      }else {
        this.currentStatus = 'unknown'
      }
      
    }, 5000);
  }
}
