import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef} from '@angular/material/dialog';
import { Beecolony } from 'src/models/beecolony.class';
import { DataService } from 'src/services/data.servie';

@Component({
  selector: 'app-dialog-edit-beecolony',
  templateUrl: './dialog-edit-beecolony.component.html',
  styleUrls: ['./dialog-edit-beecolony.component.scss']
})
export class DialogEditBeecolonyComponent implements OnInit {
  beecolony:  Beecolony;

  loading = false;

  birthDate: any;

  constructor(public data: DataService, private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditBeecolonyComponent>) { }

  ngOnInit(): void {

    this.birthDate = this.data.beecolony.birthDate;
    this.birthDate =  this.birthDate.toDate();
  }

  saveBeeColony() {
    this.loading = true;
    this.data.beecolony.birthDate = this.birthDate;
    console.log(this.beecolony);


    this.firestore
      .collection('locations')
      .doc(this.data.currentLocationId)
      .collection('beecolonys')
      .doc(this.data.currentBecoloneyId)
      .update(this.data.beecolony.toJSON())
      .then((result: any) => {
        console.log('Adding beecolony finished', result);
        this.loading = false;
        this.dialogRef.close();
      });

  }
}
