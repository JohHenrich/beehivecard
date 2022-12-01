import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Entries } from 'src/models/entries.class';
import { Task } from 'src/models/task.class';
import { GeneralTask } from 'src/models/generaltask.class';
import { DataService } from 'src/services/data.servie';
import { FireService } from 'src/services/fire.service';
import { DialogEditEntrieComponent } from '../dialog-edit-entrie/dialog-edit-entrie.component';


@Component({
  selector: 'app-entrie-card',
  templateUrl: './entrie-card.component.html',
  styleUrls: ['./entrie-card.component.scss']
})
export class EntrieCardComponent implements OnInit {
  @Input()
  entrieCustomId = '';
  entrie: any = [];
  entrieDate: Date;
  test = new GeneralTask();
  allTasks: any = [];
  allGeneralTask: any = [];
  generalList: any = [];
  dataList = [];
  generalData: boolean = false;
  

  constructor(private fire: FireService,private cdr: ChangeDetectorRef,public data: DataService, private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.data.currentBecoloneyId = paramMap.get('id').slice(20, 40);
      this.data.currentLocationId = paramMap.get('id').slice(0, 20);
    })
    //this.data.currentEntrieCustomId = this.entrieCustomId;

    this.fire.getEntrie(this.entrieCustomId).subscribe((entrieData: any) => {
      this.entrie = entrieData;
      this.entrieCustomId = entrieData.customIdName;
      this.entrieDate = this.entrie.date.toDate();
    });



    this.fire.getTasks(this.entrieCustomId).subscribe((taskData: any) => {
      this.allTasks = taskData;
      
    });

    this.fire.getGeneralEntries(this.entrieCustomId).subscribe((generalTask: any) => {
      this.allGeneralTask = generalTask;
      this.convertData();

    })


  }

  convertData() {

    if (this.allGeneralTask.length > 0) {
      this.generalList = Object.keys(this.allGeneralTask[0]);
      this.generalData = true;


      Object.entries(this.allGeneralTask[0]).forEach(entry => {
        const [key, value] = entry;
        if (key != "customIdName") {
          this.dataList.push(value);
        }

      });
      this.dataList.splice(10);
      this.generalList.splice(10);
    }

  }

  openDialogEditEnrie() {
    const dialog = this.dialog.open(DialogEditEntrieComponent);
    dialog.componentInstance.entrie = new Entries(this.entrie);
    dialog.componentInstance.currentEntrieId = this. entrieCustomId;
  }

  deleteTask() {
    this.firestore
      .collection('locations')
      .doc(this.data.currentLocationId)
      .collection('beecolonys')
      .doc(this.data.currentBecoloneyId)
      .collection('entries')
      .doc(this.entrieCustomId)
      .delete();

  }
}
