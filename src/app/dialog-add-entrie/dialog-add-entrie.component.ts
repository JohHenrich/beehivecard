import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Entries } from 'src/models/entries.class';

@Component({
  selector: 'app-dialog-add-entrie',
  templateUrl: './dialog-add-entrie.component.html',
  styleUrls: ['./dialog-add-entrie.component.scss']
})
export class DialogAddEntrieComponent implements OnInit {
  entrie = new Entries();
  entrieDate!: Date;
  loading = false;
  locationId = '';
  beecolonyId = '';

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddEntrieComponent>) { }

  ngOnInit(): void {
  }
  saveEntrie() {
    this.loading = true;
    this.entrie.date = this.entrieDate.getTime();
    console.log(this.entrie.date);


    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .add(this.entrie.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });
   
  }
}
