import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';

  users = DUMMY_USERS;

  selectedUserId? : string 

  get selectedUser(){
    return this.users.find((user)=>user.id == this.selectedUserId)!
  }

  onSelectedUser(id: string){
      this.selectedUserId = id;
  }
}
