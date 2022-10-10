import { Component, OnInit , Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input()
  allTasks = [];
  currentTask = '';

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.currentTask = this.allTasks[0];
  }

}
