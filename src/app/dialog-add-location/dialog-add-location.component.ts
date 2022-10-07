import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Locations } from 'src/models/location.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-location.component.html',
  styleUrls: ['./dialog-add-location.component.scss']
})
export class DialogAddLocationComponent implements OnInit {
  locations = new Locations();
  birthDate!: Date;
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddLocationComponent>) { }

  ngOnInit(): void {
  }

  saveLocation() {
    this.loading = true;
    console.log(this.locations);

    this.firestore
      .collection('locations')
      .add(this.locations.toJSON())
      .then((result: any) => {
        console.log('Adding user finished', result);
        this.loading = false;
        this.dialogRef.close();
      });
   
  }

}


