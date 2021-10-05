import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  subscription: Subscription;

  showAddTask: boolean;
  task: string;
  dayTime: string;
  reminder: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newTask = {
      text: this.task,
      day: this.dayTime,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask);
    this.task = '';
    this.dayTime = '';
    this.reminder = false;
  }
}
