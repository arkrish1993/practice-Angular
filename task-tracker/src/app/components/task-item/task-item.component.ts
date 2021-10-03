import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onDelete(id: number) {
    console.log(id);
  }
}
