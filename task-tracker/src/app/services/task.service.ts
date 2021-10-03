import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpService: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpService.get<Task[]>(this.apiUrl);
  }
}
