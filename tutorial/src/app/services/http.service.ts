import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRequest(url: string): void {
    this.http.get(url).subscribe(response => {
      console.log(response)
    })
  }
}
