import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component'; 
import { RegisterComponent } from './dashbord/register/register.component';

const routes: Routes = [
  {'path': 'navbar',component:NavbarComponent},
  {'path':'',
        component: RegisterComponent},
  {
    'path':'dashboard',
    component: DashbordComponent,
   
    children: [
    { 'path':'',
        component: RegisterComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
