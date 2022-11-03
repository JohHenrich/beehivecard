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
  customIdName;


  loading = false;
  locationId = '';
  beecolonyId = '';
  entrieId = '';

  generalList = [];
  saveValue: number[] = [];
  generalTask;
  savelTask = new GeneralTask();
  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskGeneralComponent>) { }

  ngOnInit(): void {

    this.generalList = Object.keys(this.savelTask);
    this.generalList.splice(10);

    if (this.customIdName) {

      Object.entries(this.generalTask).forEach(entry => {
        const [key, value] = entry;

        this.saveValue.push(+value);

      });
    }
    else {

      this.saveValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }


  }

  plus(index: number) {
    this.saveValue[index] = this.saveValue[index] + 1;
    switch (index) {
      case 0:
        this.generalTask.droneframe = this.saveValue[index];
        break;
      case 1:
        this.generalTask.broodframes = this.saveValue[index];
        break;
      case 2:
        this.generalTask.emptyframe = this.saveValue[index];
        break;
      case 3:
        this.generalTask.feedframe = this.saveValue[index];
        break;
      case 4:
        this.generalTask.middlewallframe = this.saveValue[index];
        break;
      case 5:
        this.generalTask.honeyroom = this.saveValue[index];
        break;
      case 6:
        this.generalTask.framehive = this.saveValue[index];
        break;
      case 7:
        this.generalTask.beeescape = this.saveValue[index];
        break;
      case 8:
        this.generalTask.barricade = this.saveValue[index];
        break;
      case 9:
        this.generalTask.diaper = this.saveValue[index];
        break;
    }

  }
  minus(index: number) {
    this.saveValue[index] = this.saveValue[index] - 1;
    switch (index) {
      case 0:
        this.generalTask.droneframe = this.saveValue[index];
        break;
      case 1:
        this.generalTask.broodframes = this.saveValue[index];
        break;
      case 2:
        this.generalTask.emptyframe = this.saveValue[index];
        break;
      case 3:
        this.generalTask.feedframe = this.saveValue[index];
        break;
      case 4:
        this.generalTask.middlewallframe = this.saveValue[index];
        break;
      case 5:
        this.generalTask.honeyroom = this.saveValue[index];
        break;
      case 6:
        this.generalTask.framehive = this.saveValue[index];
        break;
      case 7:
        this.generalTask.beeescape = this.saveValue[index];
        break;
      case 8:
        this.generalTask.barricade = this.saveValue[index];
        break;
      case 9:
        this.generalTask.diaper = this.saveValue[index];
        break;
    }

  }

  saveTask() {

    this.loading = true;
    this.saveTask[0] = new GeneralTask(this.generalTask);
    if (this.customIdName) {

      this.firestore
        .collection('locations')
        .doc(this.locationId)
        .collection('beecolonys')
        .doc(this.beecolonyId)
        .collection('entries')
        .doc(this.entrieId)
        .collection('generalEntries')
        .doc(this.customIdName)
        .update(this.saveTask[0].toJSON())
        .then((result: any) => {
          console.log('Updateing generalTask  finished', result);
          this.loading = false;
          this.dialogRef.close();
        });
    }
    else {

      this.firestore
        .collection('locations')
        .doc(this.locationId)
        .collection('beecolonys')
        .doc(this.beecolonyId)
        .collection('entries')
        .doc(this.entrieId)
        .collection('generalEntries')
        .add(this.saveTask[0].toJSON())
        .then((result: any) => {
          console.log('Adding generalTask finished', result);
          this.loading = false;
          this.dialogRef.close();
        });
    }
  }
}

