import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-harvest',
  templateUrl: './dialog-edit-harvest.component.html',
  styleUrls: ['./dialog-edit-harvest.component.scss']
})
export class DialogEditHarvestComponent implements OnInit {
  loading = false;
  combweight: number;

  constructor(public dialogRef: MatDialogRef<DialogEditHarvestComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  saveData(){
    
  }
}
