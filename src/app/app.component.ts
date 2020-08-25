import { Component, OnInit } from '@angular/core';
import { User } from './_models/user.model';
import { Task } from './_models/task.model';
import { DataService } from './_services/data.service';
import { TasksService } from './_services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users$: User[];
  tasks$: Task[];

  constructor(
    private dataService: DataService,
    private taskDataService: TasksService
  ) {}

  getTaskData() {
    console.log('task');
    return this.taskDataService
      .getTasks()
      .subscribe((data) => (this.tasks$ = data));
  }
  getUserData() {
    console.log('user');
    return this.dataService
      .getUsers()
      .subscribe((data) => (this.users$ = data));
  }

  ngOnInit() {
    this.getUserData();
    this.getTaskData();
  }
}
