import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component'; 
import { RegisterComponent } from './dashbord/register/register.component';
import { StudentComponent } from './dashbord/student/student.component';
import { CardComponent } from './dashbord/card/card.component';
import { TeacherComponent } from './dashbord/teacher/teacher.component';

const routes: Routes = [
  {'path': '',component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashbordComponent,
    children: [
      { path:'register', component: RegisterComponent },
      { path:'student', component: StudentComponent },
      { path: 'card', component: CardComponent },
      { path: 'teacher', component: TeacherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
