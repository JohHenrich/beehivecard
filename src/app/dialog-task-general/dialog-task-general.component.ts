import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralTask } from 'src/models/generaltask.class';

@Component({
  selector: 'app-dialog-task-general',
  templateUrl: './dialog-task-general.component.html',
  styleUrls: ['./dialog-task-general.component.scss']
})
export class DialogTaskGeneralComponent implements OnInit {

  allEntries = []; ///
  entrieDate!: Date;
  loading = false;
  locationId = '';
  beecolonyId = '';
  entrieId = '';
  taskTreatments = [];
  generalList = [];
  saveValue: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  saveGeneralTask = new GeneralTask();
  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskGeneralComponent>) { }

  ngOnInit(): void {
    this.generalList = Object.keys(this.saveGeneralTask);
  }

  plus(index: number) {
    this.saveValue[index] = this.saveValue[index] + 1;
    switch (index) {
      case 0:
        this.saveGeneralTask.droneframe = this.saveValue[index];
        break;
      case 1:
        this.saveGeneralTask.broodframes = this.saveValue[index];
        break;
      case 2:
        this.saveGeneralTask.emptyframe = this.saveValue[index];
        break;
      case 3:
        this.saveGeneralTask.feedframe = this.saveValue[index];
        break;
      case 4:
        this.saveGeneralTask.middlewallframe = this.saveValue[index];
        break;
      case 5:
        this.saveGeneralTask.droneframe = this.saveValue[index];
        break;
      case 6:
        this.saveGeneralTask.honeyroom = this.saveValue[index];
        break;
      case 7:
        this.saveGeneralTask.framehive = this.saveValue[index];
        break;
      case 8:
        this.saveGeneralTask.beeescape = this.saveValue[index];
        break;
      case 9:
        this.saveGeneralTask.barricade = this.saveValue[index];
        break;
      case 10:
        this.saveGeneralTask.diaper = this.saveValue[index];
        break;
    }

  }
  minus(index: number) {
    this.saveValue[index] = this.saveValue[index] - 1;
    switch (index) {
      case 0:
        this.saveGeneralTask.droneframe = this.saveValue[index];
        break;
      case 1:
        this.saveGeneralTask.broodframes = this.saveValue[index];
        break;
      case 2:
        this.saveGeneralTask.emptyframe = this.saveValue[index];
        break;
      case 3:
        this.saveGeneralTask.feedframe = this.saveValue[index];
        break;
      case 4:
        this.saveGeneralTask.middlewallframe = this.saveValue[index];
        break;
      case 5:
        this.saveGeneralTask.droneframe = this.saveValue[index];
        break;
      case 6:
        this.saveGeneralTask.honeyroom = this.saveValue[index];
        break;
      case 7:
        this.saveGeneralTask.framehive = this.saveValue[index];
        break;
      case 8:
        this.saveGeneralTask.beeescape = this.saveValue[index];
        break;
      case 9:
        this.saveGeneralTask.barricade = this.saveValue[index];
        break;
      case 10:
        this.saveGeneralTask.diaper = this.saveValue[index];
        break;
    }

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
      .add(this.saveGeneralTask.toJSON())
      .then((result: any) => {
        console.log('Adding generalTask finished', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }


}

