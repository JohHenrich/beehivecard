import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Beecolony } from 'src/models/beecolony.class';
import { Entries } from 'src/models/entries.class';
import { DialogEditBeecolonyComponent } from '../dialog-edit-beecolony/dialog-edit-beecolony.component';
import { DialogAddEntrieComponent } from '../dialog-add-entrie/dialog-add-entrie.component';
import { DataService } from 'src/services/data.servie';
import { FireService } from 'src/services/fire.service';

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
  allEntries:any = [];

  allBeecolonys = [];

  constructor(private fire: FireService,  public data: DataService, private cdr: ChangeDetectorRef, private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.data.currentBecoloneyId = paramMap.get('id').slice(20, 40);  
      this.data.currentLocationId = paramMap.get('id').slice(0, 20);

    })

    this.fire.getBeecoloney();
    this.fire.getEntries().subscribe((entriesData: any) => {
      this.data.allEntries = entriesData;
      
    });

  }

  openDialogEditBeecolony() {
    const dialog = this.dialog.open(DialogEditBeecolonyComponent);
    dialog.componentInstance.beecolony = this.beecolony;

  }

  openDialogAddEnrie() {
    const dialog = this.dialog.open(DialogAddEntrieComponent);
    dialog.componentInstance.entrie = new Entries(this.entries.toJSON());


  }
}
