import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { DashboardComponent } from './main/dashboard/dashboard.component';
import { FormsComponent } from './main/forms/forms.component';
import { PersonalInfoComponent } from './main/personal-info/personal-info-list/personal-info.component';
import { PersonalInfoAddComponent } from './main/personal-info/personal-info-add/personal-info-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'personal-info-add', component: PersonalInfoAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
