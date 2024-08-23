import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {  Validators } from '@angular/forms';
import { HttpService } from 'src/app/srvice/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  registerForm !: FormGroup;

  constructor(private fb: FormBuilder ,  private httpservice : HttpService  ,private route: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', Validators.required],
      role: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      code: ['', Validators.required],
    });
  }


  handleSubmit() {
    const obj = {
      id: Date.now(),
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      Email: this.registerForm.value.Email,
      role: this.registerForm.value.role,
      city: this.registerForm.value.city,
      state: this.registerForm.value.state,
      code: this.registerForm.value.code,
    };


    // this.httpservice.addStudent(obj).subscribe((data)=>{
    //   console.log(data);
    // }); 

    //console.log(obj); 

    if(this.registerForm.value.role === 'student'){
      console.log("student if");
      this.httpservice.addStudent(obj).subscribe((data)=>{
        console.log(data);
      }); }
      else{
      this.httpservice.addteacher(obj).subscribe((data)=>{
        console.log(data);
      });
    }

    this.registerForm.reset();

    
  }



}
