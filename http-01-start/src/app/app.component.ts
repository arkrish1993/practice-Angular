import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {map} from 'rxjs/operators'
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Array<Post> = [];
  isFetching: boolean = false

  constructor(private http: HttpClient) {}

  @ViewChild('postForm') formRef: NgForm;
  ngOnInit() {
    this.onFetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://udemy-http-1c237-default-rtdb.firebaseio.com/posts.json', postData).subscribe(post => {
      this.formRef.form.reset()
    })
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.http.get('https://udemy-http-1c237-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((data: {[key: string]: Post}) => {
      const postsArray: Post[] = []
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          postsArray.push({
            ...data[key], id: key
          })
        }
      }
      return postsArray
    }))
    .subscribe(posts => {
      this.loadedPosts = posts
      this.isFetching = false
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
