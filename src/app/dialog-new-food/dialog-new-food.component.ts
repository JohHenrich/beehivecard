import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskFeed } from 'src/models/taskFeed.class';
import {  MatSelectModule } from '@angular/material/select';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-new-food',
  templateUrl: './dialog-new-food.component.html',
  styleUrls: ['./dialog-new-food.component.scss']
})
export class DialogNewFoodComponent implements OnInit {
  taskFeeds = [];
  loading = false;
  newFood = new TaskFeed();


  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogNewFoodComponent>) { }

  ngOnInit(): void {
    this.firestore
    .collection('taskFeed')
    .valueChanges({})
    .subscribe((taskfeed: any) => {
      console.log('alltaskfeed: ', taskfeed);
      this.taskFeeds = taskfeed;

    })

  }
  saveNewFood(){
    this.firestore
    .collection('taskFeed')
    .add(this.newFood.toJSON())
    .then((result: any) => {
      console.log('Adding newFood', result);
      this.loading = false;
      this.dialogRef.close();
    });
      
  }
}
