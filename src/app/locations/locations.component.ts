import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Locations } from 'src/models/location.class';
import { BeecolonysComponent } from '../beecolonys/beecolonys.component';
import { DialogAddLocationComponent } from '../dialog-add-location/dialog-add-location.component';
import { DialogEditLocationComponent } from '../dialog-edit-location/dialog-edit-location.component';
import { DataService } from 'src/services/data.servie';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})


export class LocationsComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef, public data: DataService, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {

  }


  openAddLocation() {
    this.dialog.open(DialogAddLocationComponent);

  }

  setLocation(customIdName: string) {
    this.data.currentLocationId = customIdName;
  }

  deleteLocation(locationId) {
    this.firestore
      .collection('locations')
      .doc(locationId)
      .delete();
  }
}
