import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpService: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpService.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpService.delete<Task>(url);
  }

  updateReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpService.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpService.post<Task>(this.apiUrl, task, httpOptions);
  }
}
