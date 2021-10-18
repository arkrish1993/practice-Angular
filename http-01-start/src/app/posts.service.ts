import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) {}

    createAndStorePost(postData: { title: string; content: string }) {
        return this.http.post('https://udemy-http-1c237-default-rtdb.firebaseio.com/posts.json', postData)
    }

    fetchPosts() {
        return this.http.get('https://udemy-http-1c237-default-rtdb.firebaseio.com/posts.json')
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
    }

    deleteAllPosts() {
        return this.http.delete('https://udemy-http-1c237-default-rtdb.firebaseio.com/posts.json')
    }
}