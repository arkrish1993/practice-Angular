import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'Hello world How are you ?';
  // jsonValue = {
  //   test: 123,
  // };
  // date = new Date();
  userData= {
    name: "John",
    age: "20",
    id: 1
  }

  constructor(private httpService: HttpService) {}

  handleClick() {
    // this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe(response => {
    //   this.jsonValue = response
    // })
  }

  userEventHandler(user: any) {
    console.log(user)
  }
}
