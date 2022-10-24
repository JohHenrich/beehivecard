import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Entries } from 'src/models/entries.class';
import { Task } from 'src/models/task.class';



@Component({
  selector: 'app-entrie-card',
  templateUrl: './entrie-card.component.html',
  styleUrls: ['./entrie-card.component.scss']
})
export class EntrieCardComponent implements OnInit {
  @Input()
  entrieId = '';
  entrie = new Entries();
  entrieDate: Date;

  allTasks = [];
  generalEntries = [];
  generalList = [];
  dataList = [];
  generalData: boolean = false;
  locationId = '';
  beecolonyId = '';


  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.beecolonyId = paramMap.get('id');
      this.beecolonyId = this.beecolonyId.slice(20, 40);
      this.locationId = paramMap.get('id');
      this.locationId = this.locationId.slice(0, 20);
    })

    this.entrieDate = new Date(Number(this.entrie.date));


    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entrieId)
      .collection('tasks')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((tasks: any) => {
        this.allTasks = tasks;
        console.log('allTasks: ', this.allTasks);
      })

    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entrieId)
      .collection('generalEntries')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((generalEntries: any) => {
        this.generalEntries = generalEntries;
        console.log('allTasks: ', this.generalEntries);
        this.convertData();
      })

  }

  convertData() {
    this.generalList = Object.keys(this.generalEntries[0]);
    if (this.generalList.length > 0) {
      this.generalData = true;
    }


    Object.entries(this.generalEntries[0]).forEach(entry => {
      const [key, value] = entry;
      if (key != "customidName") {
        this.dataList.push(value);
      }
    });
    this.dataList.splice(10);
    this.generalList.splice(10)
  }



  addTask() {
    /*
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.beecolony = new Beecolony(this.beecolony.toJSON());
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    */
  }
}
