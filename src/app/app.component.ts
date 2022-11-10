import { ChangeDetectorRef, ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewFoodComponent } from './dialog-new-food/dialog-new-food.component';
import { DialogNewTreatmentComponent } from './dialog-new-treatment/dialog-new-treatment.component';
import { DialogEditHarvestComponent } from './dialog-edit-harvest/dialog-edit-harvest.component';
import { FireService } from 'src/services/fire.service';
import { DataService } from 'src/services/data.servie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'simple-Beehivecard';
  location = [];

  constructor(private fire: FireService, private cdr: ChangeDetectorRef, public data: DataService, public dialog: MatDialog) {
  }

  update() {
    this.cdr.detectChanges();

  }


  openDialogNewFood() {
    this.dialog.open(DialogNewFoodComponent);
  }

  openDialogNewTreatment() {
    this.dialog.open(DialogNewTreatmentComponent);
  }
  openDialogEditHarvest() {
    this.dialog.open(DialogEditHarvestComponent);
  }

  setLocationId(customIdName) {
    this.data.currentLocationId = customIdName;
    this.fire.getBeecoloneys();
  }


  setBeecoloneyId(customIdName) {
    this.data.currentBecoloneyId = customIdName;
  }
}
