import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { timestamp } from 'rxjs';
import { Entries } from 'src/models/entries.class';
import { DataService } from 'src/services/data.servie';


@Component({
  selector: 'app-dialog-edit-entrie',
  templateUrl: './dialog-edit-entrie.component.html',
  styleUrls: ['./dialog-edit-entrie.component.scss']
})

export class DialogEditEntrieComponent implements OnInit {
  entrie: Entries;
  entrieDate: any;
  loading = false;
  currentEntrieId = '';

  constructor(public data: DataService, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditEntrieComponent>) { }


  ngOnInit(): void {
    this.entrieDate  = this.entrie.date;
    this.entrieDate = this.entrieDate.toDate();
    //this.entrieDate = formatDate(new Date(Number (this.entrie.date)));
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
      .doc(this.currentEntrieId)
      .update(this.entrie.toJSON())
        .then((result: any) => {
          this.loading = false;
          this.dialogRef.close();
      });
  }
}


