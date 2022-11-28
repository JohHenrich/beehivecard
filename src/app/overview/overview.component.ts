import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from 'src/services/data.servie';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverViewComponent implements OnInit {

  constructor(private data:DataService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
   


  
  }

}
