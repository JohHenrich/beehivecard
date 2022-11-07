import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-task-harvest',
  templateUrl: './dialog-task-harvest.component.html',
  styleUrls: ['./dialog-task-harvest.component.scss']
})
export class DialogTaskHarvestComponent implements OnInit {
  saveValue:Task = new Task();
  allEntries = []; ///
  entrieDate!: Date;
  loading = false;
  locationId = '';
  beecolonyId = '';
  entrieId = '';
  havestCustomId = '';
  taskTreatments = [];

  dataTask: Task;
  amount: number = 1.5;
  combs: number;
  unit = 'kg';

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogTaskHarvestComponent>) { }

  ngOnInit(): void {
    if (!this.havestCustomId) {
      this.saveValue.unit = "kg"
    }

  }


  saveTask() {
    this.loading = true;
    this.convertData();
    if (this.havestCustomId) {
      this.dataTask = new Task(this.saveValue);
      this.firestore
        .collection('locations')
        .doc(this.locationId)
        .collection('beecolonys')
        .doc(this.beecolonyId)
        .collection('entries')
        .doc(this.entrieId)
        .collection('tasks')
        .doc(this.havestCustomId)
        .update(this.dataTask.toJSON())
        .then((result: any) => {
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
        .collection('tasks')
        .add(this.saveValue.toJSON())
        .then((result: any) => {
          this.loading = false;
          this.dialogRef.close();
        });
    }
  }

  convertData() {
    this.saveValue.header = "Harvest"
    this.saveValue.type = "Honey"
    this.saveValue.amount = this.saveValue.amount2*this.amount;

  }
} 