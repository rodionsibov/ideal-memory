import { Component, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []
  showSpinner: boolean = false

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.showSpinner = true
    this.taskService.getTask().subscribe(tasks => {
      this.tasks = tasks
      console.log(this.tasks);
      this.showSpinner = false 
    })


  }

}
