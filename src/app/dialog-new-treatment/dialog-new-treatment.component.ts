import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { TaskTreatment } from 'src/models/taskTreatment.class';

@Component({
  selector: 'app-dialog-new-treatment',
  templateUrl: './dialog-new-treatment.component.html',
  styleUrls: ['./dialog-new-treatment.component.scss']
})
export class DialogNewTreatmentComponent implements OnInit {
  taskFeeds = [];
  loading = false;
  newTreatment = new TaskTreatment();

  taskTreatments = [];


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogNewTreatmentComponent>) { }

  ngOnInit(): void {

    this.firestore
      .collection('taskTreatment')
      .valueChanges({})
      .subscribe((taskfeed: any) => {
        console.log('alltaskfeed: ', taskfeed);
        this.taskTreatments = taskfeed;
      })



  }


  saveNewFood() {
    this.firestore
      .collection('taskTreatment')
      .add(this.newTreatment.toJSON())
      .then((result: any) => {
        console.log('Adding newTreatment', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }
}
