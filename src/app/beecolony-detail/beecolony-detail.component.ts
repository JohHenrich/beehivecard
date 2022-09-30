import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Locations } from 'src/models/location.class';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { DialogEditBeecolonyComponent } from '../dialog-edit-beecolony/dialog-edit-beecolony.component';
import { EntrieCardComponent } from '../entrie-card/entrie-card.component';

@Component({
  selector: 'app-beecolony-detail',
  templateUrl: './beecolony-detail.component.html',
  styleUrls: ['./beecolony-detail.component.scss']
})



export class BeecolonyDetailComponent implements OnInit {
  beecolony: Beecolony = new Beecolony();
  locationId = '';
  beecolonyId = '';
  entries: Entries = new Entries();

  allBeecolonys = [];

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.beecolonyId = paramMap.get('id');
      this.beecolonyId = this.beecolonyId.slice(20,40);
      this.locationId = paramMap.get('id');
      this.locationId =  this.locationId.slice(0,20);
    })
    

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .valueChanges({ idField: 'customIdName' })
      .subscribe((beecolony: any) => {
        console.log('ID: ', beecolony);
        this.allBeecolonys = beecolony;

      })
      this.getBecolony();

  }


  getBecolony() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .valueChanges()
      .subscribe((beecolony: any) => {
        console.log(beecolony);
        this.beecolony = new Beecolony(beecolony) ;
        console.log('Name:', this.beecolony.name);
      })
    //console.log('Name:', this.locations)
  }


  editBeecolony() {
    const dialog = this.dialog.open(DialogEditBeecolonyComponent);
    dialog.componentInstance.beecolony = new Beecolony (this.beecolony.toJSON());   
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
  }

  addTask() {
    /*
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.beecolony = new Beecolony(this.beecolony.toJSON());
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    */
  }
}
