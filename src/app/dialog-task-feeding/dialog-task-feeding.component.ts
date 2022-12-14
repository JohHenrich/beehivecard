import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { TaskFeed } from 'src/models/taskFeed.class';
import { DataService } from 'src/services/data.servie';

@Component({
  selector: 'app-dialog-task-feeding',
  templateUrl: './dialog-task-feeding.component.html',
  styleUrls: ['./dialog-task-feeding.component.scss']
})
export class DialogTaskFoodComponent implements OnInit {
  task:Task  = new Task();

  feedingCustomId = '';
  loading = false;

  taskFeeds = [];
  selectedValue = new TaskFeed();
  saveValue = new Task();
  amount: number;

  constructor(public data: DataService, private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskFoodComponent>) { }

  ngOnInit(): void {
    if (this.feedingCustomId) {
      this.selectedValue.unit = this.task.unit;
      this.selectedValue.food = this.task.type; 
    }
    
      this.firestore
      .collection('taskFeed')
      .valueChanges({})
      .subscribe((taskfeed: any) => {
        console.log('alltaskfeed: ', taskfeed);
        this.taskFeeds = taskfeed;
      })
  }


  saveTask() {
    this.loading = true;

    this.convertData();
    if (this.feedingCustomId) {
      this.firestore
        .collection('locations')
        .doc(this.data.currentLocationId )
        .collection('beecolonys')
        .doc(this.data.currentBecoloneyId)
        .collection('entries')
        .doc(this.data.currentEntrieId)
        .collection('tasks')
        .doc(this.feedingCustomId)
        .update(this.task.toJSON())
        .then((result: any) => {
          console.log('Adding beecolony finished', result);
          this.loading = false;
          this.dialogRef.close();
        });
    }

    else {
      this.firestore
        .collection('locations')
        .doc(this.data.currentLocationId )
        .collection('beecolonys')
        .doc(this.data.currentBecoloneyId)
        .collection('entries')
        .doc(this.data.currentEntrieId)
        .collection('tasks')
        .add(this.task.toJSON())
        .then((result: any) => {
          console.log('Adding beecolony finished', result);
          this.loading = false;
          this.dialogRef.close();
        });
    }
  }

  convertData() {
    this.task.header = "Feeding"
    this.task.type = this.selectedValue.food;
    this.task.unit = this.selectedValue.unit;
  }
}


