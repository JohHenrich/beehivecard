import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { TaskTreatment } from 'src/models/taskTreatment.class';
import { DataService } from 'src/services/data.servie';


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
  
  treatmentCustomId = '';
  taskTreatments = [];
  selectedValue = new TaskTreatment();
  saveValue = new Task();
  amount: number;

  constructor(public data: DataService, private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskTreatmentComponent>) { }

  ngOnInit(): void {
    if(this.treatmentCustomId){
       this.selectedValue.medicine = this.task.type;
       this.selectedValue.unit = this.task.unit;
    }
    
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
    if (this.treatmentCustomId) {
      this.saveValue = new Task(this.task);
      this.firestore
      .collection('locations')
      .doc(this.data.currentLocationId)
      .collection('beecolonys')
      .doc(this.data.currentBecoloneyId)
      .collection('entries')
      .doc(this.data.currentEntrieId)
      .collection('tasks')
        .doc(this.treatmentCustomId)
        .update(this.saveValue[0].toJSON())
        .then((result: any) => {
          console.log('Adding beecolony finished', result);
          this.loading = false;
          this.dialogRef.close();
        });
    
  }

  else {
    this.firestore
    .collection('locations')
    .doc(this.data.currentLocationId)
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
  this.task.header = "Treatment"
  this.task.type = this.selectedValue.medicine;
  //this.task.amount = this.amount;
  this.task.unit = this.selectedValue.unit;
}
}