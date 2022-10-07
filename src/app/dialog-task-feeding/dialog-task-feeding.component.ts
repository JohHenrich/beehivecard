import {NgModule} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { TaskFeed } from 'src/models/taskFeed.class';
import {  MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dialog-task-feeding',
  templateUrl: './dialog-task-feeding.component.html',
  styleUrls: ['./dialog-task-feeding.component.scss']
})
export class DialogTaskFoodComponent implements OnInit {
  task = new Task();
  allEntries =[]; ///
  entrieDate!: Date;
  loading = false;
  locationId = '';
  beecolonyId = '';
  entrieId = '';
  taskFeeds = [];
  selectedValue = '';

  constructor( private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskFoodComponent>) { }

  ngOnInit(): void {
    this.firestore
    .collection('taskfeed')
    .valueChanges({ idField: 'customIdName' })
    .subscribe((taskfeed: any) => {
      console.log('alltaskfeed: ', taskfeed);
      this.taskFeeds = taskfeed;

    })
  }
  saveTask() {
    this.loading = true;

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entrieId)
      .collection('tasks')
      .add(this.task.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }
}


