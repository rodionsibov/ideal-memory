import { Component, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css'],
})
export class TaskTrackerComponent implements OnInit {
  tasks: Task[] = [];
  showSpinner: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
      this.showSpinner = false;
    });
  }
}
