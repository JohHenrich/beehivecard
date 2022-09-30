import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locations } from 'src/models/location.class';

@Component({
  selector: 'app-dialog-edit-location',
  templateUrl: './dialog-edit-location.component.html',
  styleUrls: ['./dialog-edit-location.component.scss']
})
export class DialogEditLocationComponent implements OnInit {
  locationId = '';
  locations: any = '';

  birthDate!: Date;
  loading = false;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditLocationComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.locations);
  }


  saveLocation() {
    this.loading = true;
    //this.user.birthDate = this.birthDate.getTime();
    console.log(this.locations);


    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .update(this.locations.toJSON())
      .then((result: any) => {
        console.log('Adding user finished', result);
        this.loading = false;
        this.dialogRef.close();
      });


  }
}
