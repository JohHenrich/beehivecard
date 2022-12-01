import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef} from '@angular/material/dialog';
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
  beecolony: Beecolony = new Beecolony();
  locations = '';

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddBeecolonyComponent>) { }

  ngOnInit(): void {

  }

  saveBeeColony() {
    this.loading = true;
    this.beecolony.birthDate = this.birthDate;
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
