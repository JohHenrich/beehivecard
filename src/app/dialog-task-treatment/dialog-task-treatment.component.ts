import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { TaskTreatment } from 'src/models/taskTreatment.class';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-dialog-task-treatment',
  templateUrl: './dialog-task-treatment.component.html',
  styleUrls: ['./dialog-task-treatment.component.scss']
})
export class DialogTaskTreatmentComponent implements OnInit {
  task = new Task();
  allEntries = []; ///
  entrieDate!: Date;
  loading = false;
  locationId = '';
  beecolonyId = '';
  entrieId = '';
  taskTreatments = [];
  selectedValue = new TaskTreatment();
  saveValue = new Task();
  amount: number;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskTreatmentComponent>) { }

  ngOnInit(): void {

    this.firestore
      .collection('taskTreatment')
      .valueChanges({})
      .subscribe((tasktreatment: any) => {
        console.log('alltaskTreatment: ', tasktreatment);
        this.taskTreatments = tasktreatment;
      })



  }


  saveTask() {
    this.loading = true;

    this.convertData();

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entrieId)
      .collection('tasks')
      .add(this.saveValue.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }

  convertData() {
    this.saveValue.header = "Treatment"
    this.saveValue.type = this.selectedValue.medicine;
    this.saveValue.amount = this.amount;
    this.saveValue.unit = this.selectedValue.unit;
  }
}