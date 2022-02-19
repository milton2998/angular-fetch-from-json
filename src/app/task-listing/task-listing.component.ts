/*task-listing.component.ts*/

import { Component, OnInit } from '@angular/core';
import taskdata from './data.json';

interface Task{
  taskid:Number,
  taskName:String,
  taskDescription:String,
  taskAssignee:String
}

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks:Task[] = taskdata;
}
