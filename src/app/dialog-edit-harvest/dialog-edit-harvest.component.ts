import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TaskHavest } from 'src/models/taskHavest.class';

@Component({
  selector: 'app-dialog-edit-harvest',
  templateUrl: './dialog-edit-harvest.component.html',
  styleUrls: ['./dialog-edit-harvest.component.scss']
})
export class DialogEditHarvestComponent implements OnInit {
  loading = false;
  combweight: number;
  havestData: TaskHavest = new TaskHavest();
  havestCustomId = '';

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditHarvestComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firestore
    .collection('taskHavest')
    .valueChanges({idField: 'customIdName'})
    .subscribe((taskHavest: any ) => {
      console.log('alltaskHavest: ', taskHavest);
      this.havestData = new TaskHavest(taskHavest[0]);
      this.havestCustomId = taskHavest[0].customIdName;
    })
  }

  saveData() {
    this.firestore
      .collection('taskHavest')
      .doc(this.havestCustomId)
      .update(this.havestData.toJSON())
      .then((result: any) => {
        console.log('Change Colbweight', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }
}