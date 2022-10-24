import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddLocationComponent } from './dialog-add-location/dialog-add-location.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


import { FormsModule } from '@angular/forms';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
//import { provideAuth, getAuth } from '@angular/fire/auth';
//import { provideDatabase, getDatabase } from '@angular/fire/database';
//import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatMenuModule } from '@angular/material/menu';

import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationsComponent } from './locations/locations.component';
import { DialogAddBeecolonyComponent } from './dialog-add-beecolony/dialog-add-beecolony.component';
import { BeecolonysComponent } from './beecolonys/beecolonys.component';
import { DialogEditLocationComponent } from './dialog-edit-location/dialog-edit-location.component';
import { BeecolonyDetailComponent } from './beecolony-detail/beecolony-detail.component';
import { DialogEditBeecolonyComponent } from './dialog-edit-beecolony/dialog-edit-beecolony.component';
import { EntrieCardComponent } from './entrie-card/entrie-card.component';
import { DialogAddEntrieComponent } from './dialog-add-entrie/dialog-add-entrie.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { EntrieEditComponent } from './entrie-edit/entrie-edit.component';
import { DialogTaskFoodComponent } from './dialog-task-feeding/dialog-task-feeding.component';
import { DialogNewFoodComponent } from './dialog-new-food/dialog-new-food.component';
import { DialogTaskTreatmentComponent } from './dialog-task-treatment/dialog-task-treatment.component';
import { DialogNewTreatmentComponent } from './dialog-new-treatment/dialog-new-treatment.component';
import { DialogTaskHarvestComponent } from './dialog-task-harvest/dialog-task-harvest.component';
import { DialogEditHarvestComponent } from './dialog-edit-harvest/dialog-edit-harvest.component';
import { DialogTaskGeneralComponent } from './dialog-task-general/dialog-task-general.component';
import { DialogTaskEvaluationComponent } from './dialog-task-evaluation/dialog-task-evaluation.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddLocationComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    SettingsComponent,
    LocationsComponent,
    DialogAddBeecolonyComponent,
    BeecolonysComponent,
    DialogEditLocationComponent,
    BeecolonyDetailComponent,
    DialogEditBeecolonyComponent,
    EntrieCardComponent,
    DialogAddEntrieComponent,
    TaskCardComponent,
    EntrieEditComponent,
    DialogTaskFoodComponent,
    DialogNewFoodComponent,
    DialogTaskTreatmentComponent,
    DialogNewTreatmentComponent,
    DialogTaskHarvestComponent,
    DialogEditHarvestComponent,
    DialogTaskGeneralComponent,
    DialogTaskEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideDatabase(() => getDatabase()),
    //provideFirestore(() => getFirestore()),
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
