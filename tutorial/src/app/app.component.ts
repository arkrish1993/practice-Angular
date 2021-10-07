import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  // title = 'Hello world How are you ?';
  // jsonValue = {
  //   test: 123,
  // };
  // date = new Date();
  userData= {
    name: "John",
    age: "20",
    id: 1,
    isTrue: false
  }

  posts: any = []

  showUser: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getPosts()
  }

  handleClick() {
    // this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe(response => {
    //   this.jsonValue = response
    // })
  }

  userEventHandler(user: any) {
    console.log(user)
  }

  getPosts() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.posts = response
    })
  }
}
