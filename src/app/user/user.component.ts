import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddLocationComponent } from '../dialog-add-location/dialog-add-location.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User();
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) =>{
      console.log(changes);
      this.allUsers = changes;
    })
  }


  openDialog(){
    this.dialog.open(DialogAddLocationComponent);
  }
}
