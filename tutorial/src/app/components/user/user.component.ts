import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface {
  id?:number,
  name:string,
  age:string,
  isTrue: boolean
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserInterface;
  @Output() userEvent: EventEmitter<UserInterface> = new EventEmitter<UserInterface>()

  isTrue: boolean = false;

  constructor() { 
    this.user = {} as UserInterface
  }
  
  ngOnInit(): void {
    this.isTrue = this.user.isTrue ? this.user.isTrue : false
  }

  sendUserEvent() {
    this.userEvent.emit(this.user)
  }

}
