import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Beecolony } from 'src/models/beecolony.class';

@Component({
  selector: 'app-dialog-edit-beecolony',
  templateUrl: './dialog-edit-beecolony.component.html',
  styleUrls: ['./dialog-edit-beecolony.component.scss']
})
export class DialogEditBeecolonyComponent implements OnInit {
  beecolony = new Beecolony();
  locationId = '';
  beecolonyId = '';
  loading = false;

  birthDate!: Date;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditBeecolonyComponent>) { }

  ngOnInit(): void {
    //this.birthDate.setDate( Number(this.beecolony.birthDate) );
    this.birthDate = new Date(Number(this.beecolony.birthDate));
  }

  saveBeeColony() {
    this.loading = true;
    this.beecolony.birthDate = this.birthDate.getTime();
    console.log(this.beecolony);


    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .update(this.beecolony.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });
   
  }
}
