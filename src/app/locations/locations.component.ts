import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Locations } from 'src/models/location.class';
import { BeecolonysComponent } from '../beecolonys/beecolonys.component';
import { DialogAddLocationComponent } from '../dialog-add-location/dialog-add-location.component';
import { DialogEditLocationComponent } from '../dialog-edit-location/dialog-edit-location.component';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  user: User = new User();
  allUsers = [];

  locations: Locations = new Locations();
  allLocations = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('locations')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log(changes);
        this.allLocations = changes;
      })
  }


  openAddLocation() {
    this.dialog.open( DialogAddLocationComponent );
  }

}
