import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddBeecolonyComponent } from '../dialog-add-beecolony/dialog-add-beecolony.component';
import { DialogEditLocationComponent } from '../dialog-edit-location/dialog-edit-location.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Locations } from 'src/models/location.class';
import { Beecolony } from 'src/models/beecolony.class';
import { FireService } from 'src/services/fire.service';
import { DataService } from 'src/services/data.servie';


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


  constructor(private fire: FireService, private cdr: ChangeDetectorRef, public data: DataService, private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.data.currentLocationId = paramMap.get('id');
      this.fire.getLocation();
      this.fire.getBeecoloneys();
   
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
    dialog.componentInstance.locationId = this.data.currentLocationId;
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
