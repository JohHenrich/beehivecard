import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Locations } from 'src/models/location.class';
import { Beecolony } from 'src/models/beecolony.class';


@Component({
  selector: 'app-dialog-add-beecolony',
  templateUrl: './dialog-add-beecolony.component.html',
  styleUrls: ['./dialog-add-beecolony.component.scss']
})
export class DialogAddBeecolonyComponent implements OnInit {
  locationId = '';

  birthDate!: Date;
  loading = false;
  beecolony = new Beecolony();
  locations = '';

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddBeecolonyComponent>) { }

  ngOnInit(): void {

  }

  saveBeeColony() {
    this.loading = true;
    this.beecolony.birthDate = this.birthDate.getTime();
    console.log(this.beecolony);


    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .add(this.beecolony.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });
   
  }
}
