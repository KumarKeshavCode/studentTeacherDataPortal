import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component'; 
import { RegisterComponent } from './dashbord/register/register.component';
import { StudentComponent } from './dashbord/student/student.component';
import { CardComponent } from './dashbord/card/card.component';

const routes: Routes = [
  {'path': 'navbar',component:NavbarComponent},
  {'path':'register',
        component: RegisterComponent
  },
  {'path':'card',
    component: CardComponent
},
  {
    'path' :'student',
    component :StudentComponent
  },
        
  {
    'path':'',
    component: DashbordComponent,
   
    children: [
    { 'path':'register',
        component: RegisterComponent
    },
    {
      'path' :'student',
      component :StudentComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
