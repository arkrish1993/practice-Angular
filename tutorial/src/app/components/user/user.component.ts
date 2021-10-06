import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface {
  id?:number,
  name:string,
  age:string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserInterface;
  @Output() userEvent: EventEmitter<UserInterface> = new EventEmitter<UserInterface>()
  constructor() { 
    this.user = {} as UserInterface
  }

  ngOnInit(): void {
  }

  sendUserEvent() {
    this.userEvent.emit(this.user)
  }

}
