import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFoodTaskComponent } from './dialog-food-task/dialog-food-task.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-Beehivecard';
  constructor(public dialog: MatDialog) {
  }

  openDialogFoodTask(){
    this.dialog.open(DialogFoodTaskComponent);
  }
}
