import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
