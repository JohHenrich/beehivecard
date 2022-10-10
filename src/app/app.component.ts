import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewFoodComponent } from './dialog-new-food/dialog-new-food.component';
import { DialogNewTreatmentComponent } from './dialog-new-treatment/dialog-new-treatment.component';
import { DialogEditHarvestComponent } from './dialog-edit-harvest/dialog-edit-harvest.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-Beehivecard';
  constructor(public dialog: MatDialog) {
  }

  openDialogNewFood(){
    this.dialog.open(DialogNewFoodComponent);
  }
  
  openDialogNewTreatment(){
    this.dialog.open(DialogNewTreatmentComponent);
  }
  openDialogEditHarvest(){
    this.dialog.open(DialogEditHarvestComponent);
  }
}
