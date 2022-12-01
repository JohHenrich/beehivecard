import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Entries } from 'src/models/entries.class';
import { DataService } from 'src/services/data.servie';

@Component({
  selector: 'app-dialog-add-entrie',
  templateUrl: './dialog-add-entrie.component.html',
  styleUrls: ['./dialog-add-entrie.component.scss']
})

export class DialogAddEntrieComponent implements OnInit {
  entrie = new Entries();
  allEntries =[]; ///
  entrieDate!: Date;
  loading = false;

  constructor(public data: DataService, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddEntrieComponent>) { }

  ngOnInit(): void {
  }

  saveEntrie() {
    this.loading = true;
    this.entrie.date = this.entrieDate;

    this.firestore
      .collection('locations')
      .doc(this.data.currentLocationId)
      .collection('beecolonys')
      .doc(this.data.currentBecoloneyId)
      .collection('entries')
      .add(this.entrie.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }
}
