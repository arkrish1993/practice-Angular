import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

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
export class UserComponent implements OnInit, OnChanges {
  @Input() user: UserInterface;
  @Input() testChange: string;
  @Output() userEvent: EventEmitter<UserInterface> = new EventEmitter<UserInterface>()

  isTrue: boolean = false;

  constructor() { 
    this.user = {} as UserInterface
    this.testChange = ''
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    this.isTrue = this.user.isTrue ? this.user.isTrue : false
  }

  sendUserEvent() {
    this.userEvent.emit(this.user)
  }

}
