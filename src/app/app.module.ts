import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherComponent } from './dashbord/teacher/teacher.component';
import { StudentComponent } from './dashbord/student/student.component';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {MatIconModule} from '@angular/material/icon';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './dashbord/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    NavbarComponent,
    DashbordComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
