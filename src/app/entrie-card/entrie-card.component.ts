import { Component, OnInit , Input} from '@angular/core';
import { Entries } from 'src/models/entries.class';

@Component({
  selector: 'app-entrie-card',
  templateUrl: './entrie-card.component.html',
  styleUrls: ['./entrie-card.component.scss']
})
export class EntrieCardComponent implements OnInit {
  @Input()
  entries= new Entries() ;
  locationId = '';
  beecolonyId = '';
 
  
  constructor() { }

  ngOnInit(): void {
  }
  addTask() {
    /*
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.beecolony = new Beecolony(this.beecolony.toJSON());
    dialog.componentInstance.beecolonyId = this.beecolonyId;
    */
  }
}
