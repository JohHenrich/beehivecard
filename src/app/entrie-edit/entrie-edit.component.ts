import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { DialogTaskFoodComponent } from '../dialog-task-feeding/dialog-task-feeding.component';

@Component({
  selector: 'app-entrie-edit',
  templateUrl: './entrie-edit.component.html',
  styleUrls: ['./entrie-edit.component.scss']
})
export class EntrieEditComponent implements OnInit {
  beecolony: Beecolony = new Beecolony();
  locationId = '';
  beecolonyId = '';
  entriesId = '';

  entries: Entries = new Entries();
  allEntries = [];
  entrieDate: Date;
  allBeecolonys = [];
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.beecolonyId = paramMap.get('id');
      this.beecolonyId = this.beecolonyId.slice(20, 40);
      this.locationId = paramMap.get('id');
      this.locationId = this.locationId.slice(0, 20);
      this.entriesId  = paramMap.get('id');
      this.entriesId  = this.entriesId.slice(40, 60);
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
        this.beecolony = new Beecolony(beecolony);
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
      .doc(this.entriesId)
      .valueChanges()
      .subscribe((entries: any) => {
        this.entries = new Entries(entries);
        console.log('Entries Des.:', this.entries);
        this.entrieDate = new Date(Number(this.entries.date));
      })

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .valueChanges({ idField: 'customIdName' })
      .subscribe((entries: any) => {
     
        this.allEntries = entries;
        console.log('allEntries:', this.allEntries);
        
      })
    //console.log('Name:', this.locations)
  }

  openDialogeAddTaskFood() {
    const dialog = this.dialog.open(DialogTaskFoodComponent);
   

  }

}
