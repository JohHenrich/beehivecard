import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskFeed } from 'src/models/taskFeed.class';
import {  MatSelectModule } from '@angular/material/select';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-food-task',
  templateUrl: './dialog-food-task.component.html',
  styleUrls: ['./dialog-food-task.component.scss']
})
export class DialogFoodTaskComponent implements OnInit {
  taskFeeds = [];
  loading = false;
  newFood = new TaskFeed();


  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogFoodTaskComponent>) { }

  ngOnInit(): void {
    this.firestore
    .collection('taskfeed')
    .valueChanges({})
    .subscribe((taskfeed: any) => {
      console.log('alltaskfeed: ', taskfeed);
      this.taskFeeds = taskfeed;

    })

  }
  saveNewFood(){
    this.firestore
    .collection('taskfeed')
    .add(this.newFood.toJSON())
    .then((result: any) => {
      console.log('Adding newFood', result);
      this.loading = false;
      this.dialogRef.close();
    });
      
  }
}
