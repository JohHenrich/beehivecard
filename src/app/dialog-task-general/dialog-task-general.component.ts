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

  saveValue = new GeneralTask();
  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskGeneralComponent>) { }

  ngOnInit(): void {
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
      .add(this.saveValue.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }


}

