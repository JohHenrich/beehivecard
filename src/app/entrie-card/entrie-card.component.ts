import { Component, OnInit , Input} from '@angular/core';
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
  entrie= new Entries() ;
  entriesId  = '';
  allEntries =[];
  locationId = '';
  task = new Task();
  allTasks =[];
  beecolonyId = '';
  entrieDate: Date;
  
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.beecolonyId = paramMap.get('id');
      this.beecolonyId = this.beecolonyId.slice(20,40);
      this.locationId = paramMap.get('id');
      this.locationId =  this.locationId.slice(0,20);
    })
    
    this.entrieDate = new Date(Number(this.entrie.date));


    this.firestore
      .collection('locations')
      .doc(this.locationId)
      .collection('beecolonys')
      .doc(this.beecolonyId)
      .collection('entries')
      .doc(this.entriesId)
      .valueChanges({ idField: 'customIdName' })
      .subscribe((tasks: any) => {
        console.log('ID: ', tasks);
        this.allTasks = tasks;
       
      })

    
    
  
  }
  addTask() {
    /*
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.beecolony = new Beecolony(this.beecolony.toJSON());
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    */
  }
}
