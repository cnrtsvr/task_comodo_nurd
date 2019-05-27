import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '',   redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    FormComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
	Ng2SmartTableModule,
	HttpClientModule,
  FormsModule,
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
