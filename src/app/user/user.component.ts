import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const random_Index = Math.floor(Math.random()* DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  // @Input({required:true}) id!:string;
  @Input({required:true}) selected!:boolean
  @Input({required:true}) user!:User;
  @Output() select = new EventEmitter();
  // select = output<string>() // out put function

  //  avatar = input('')
  // avatar = input.required<string>(); //signal input
  // name = input.required<string>();

  // selectedUser = DUMMY_USERS(random_Index)
  // selectedUser = signal(DUMMY_USERS[random_Index]);

  // imagePath = computed(()=>'assets/users/'+ this.selectedUser().avatar); //signal
  // imagePath = computed(()=>'assets/users/'+ this.avatar()); //signal input
  get imagePath (){
    return 'assets/users/'+ this.user.avatar
  }
  onSelectUser (){
    this.select.emit(this.user.id)
// const random_Index = Math.floor(Math.random()* DUMMY_USERS.length)
//     this.selectedUser.set(DUMMY_USERS[random_Index])
    // this.selectedUser = DUMMY_USERS[random_Index]
  }
}
