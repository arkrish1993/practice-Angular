import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello world How are you ?';
  jsonValue = {
    test: 123,
  };
  date = new Date();

  handleClick() {
    console.log(this.title);
  }
}
