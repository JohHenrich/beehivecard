import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddBeecolonyComponent } from '../dialog-add-beecolony/dialog-add-beecolony.component';
import { DialogEditLocationComponent } from '../dialog-edit-location/dialog-edit-location.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Locations } from 'src/models/location.class';
import { Beecolony } from 'src/models/beecolony.class';

@Component({
  selector: 'app-beecolonys',
  templateUrl: './beecolonys.component.html',
  styleUrls: ['./beecolonys.component.scss']
})
export class BeecolonysComponent implements OnInit {
  locationId = '';
  locations: Locations = new Locations();
  bees: Beecolony = new Beecolony();
  allBeecolonys = [];


  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.locationId = paramMap.get('id');
      this.getLocation();
    })
    this.getCustumId();

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((beecolony: any) => {
        console.log(beecolony);
        this.allBeecolonys = beecolony;
      })


  }
  getLocation() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .valueChanges()
      .subscribe((locations: Locations) => {
        this.locations = new Locations(locations);
      })
    console.log('Name:', this.locations)
  }


  getCustumId() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Beecolony',changes);
        //this.allUsers = changes;
      })
  }


  openAddDialog() {
    const dialog = this.dialog.open(DialogAddBeecolonyComponent);
    //dialog.componentInstance.locations[this.locationId] = new Locations(this.locations[this.locationId].beecolonys[this.allBeecolonys.length].toJSON);
    dialog.componentInstance.locationId = this.locationId;

  }


  openEditDialog() {
    const dialog = this.dialog.open(DialogEditLocationComponent);
    dialog.componentInstance.locations = this.locations;
    dialog.componentInstance.locationId = this.locationId;
  }


  deleteBeecolony(beecolonyId){
    this.firestore
    .collection('locations')
    .doc(this.locationId)
    .collection('beecolonys')
    .doc(beecolonyId)
    .delete();
  }
}
