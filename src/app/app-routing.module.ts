import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { LocationsComponent } from './locations/locations.component';
import { BeecolonysComponent } from './beecolonys/beecolonys.component';
import { BeecolonyDetailComponent } from './beecolony-detail/beecolony-detail.component';
import { EntrieEditComponent } from './entrie-edit/entrie-edit.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'location/:id', component: BeecolonysComponent},
  {path: 'beecolony/:id', component: BeecolonyDetailComponent},
  {path: 'entrie/:id', component:  EntrieEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
