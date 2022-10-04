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
import { FormsModule } from '@angular/forms';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
//import { provideAuth, getAuth } from '@angular/fire/auth';
//import { provideDatabase, getDatabase } from '@angular/fire/database';
//import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { MatProgressBarModule} from '@angular/material/progress-bar';
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
    EntrieEditComponent
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
