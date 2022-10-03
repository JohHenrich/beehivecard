import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { DialogEditBeecolonyComponent } from '../dialog-edit-beecolony/dialog-edit-beecolony.component';
import { DialogAddEntrieComponent } from '../dialog-add-entrie/dialog-add-entrie.component';

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
  allEntries = [];
 
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
      this.getEntries();
  
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

  getEntries() {
    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .valueChanges()
      .subscribe((entries: any) => {
        console.log(entries);
        this.entries = new Entries(entries) ;
        this.allEntries = entries;
        console.log('Entries Des.:', this.entries.description);
      })
    //console.log('Name:', this.locations)
  }



  editBeecolony() {
    const dialog = this.dialog.open(DialogEditBeecolonyComponent);
    dialog.componentInstance.beecolony = new Beecolony (this.beecolony.toJSON());   
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    dialog.componentInstance.locationId = this.locationId;
  }

  openDialogAddEnrie() {
    const dialog = this.dialog.open(DialogAddEntrieComponent);
    dialog.componentInstance.entrie = new Entries (this.entries.toJSON());   
    dialog.componentInstance.locationId = this.locationId;
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    
  }
}
