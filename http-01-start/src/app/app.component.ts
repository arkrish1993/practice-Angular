import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {map, throwIfEmpty} from 'rxjs/operators'
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Array<Post> = [];
  isFetching: boolean = false

  constructor(private http: HttpClient, private postsService: PostsService) {}

  @ViewChild('postForm') formRef: NgForm;
  ngOnInit() {
    this.onFetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost(postData)
    .subscribe(() => {
      this.formRef.reset()
      this.onFetchPosts()
    })
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts()
    .subscribe(posts => {
      this.loadedPosts = posts
      this.isFetching = false
    })
  }

  onClearPosts() {
    this.postsService.deleteAllPosts()
    .subscribe(() => {
      this.loadedPosts = []
    })
  }
}
