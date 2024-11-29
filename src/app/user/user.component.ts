import { Component, computed,  Input, input, Output, EventEmitter, output , } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';








@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {

  // @Input({required: true})  avatar !: string

  // @Input ({required: true}) id !: string

  //  avatar = input<string>()
  //  name = input<string>()
  //  id = input<String>()


  // @Input({required: true}) user ! : {
  //   id : string,
  //   name : string,
  //   avatar : string
  // };

  @Input({required : true}) user ! : User
  @Input({required: true}) selected ! : boolean 

  

 
   
  //  @Output() select = new EventEmitter<string>();

  select = output<string>();

  imagepath = computed(()=>{
    return this.user.avatar
  })


  //  get imagepath(){
  //     return this.avatar
  //  }
 

  onSelectUser() {
      this.select.emit(this.user.id)
  }
}


