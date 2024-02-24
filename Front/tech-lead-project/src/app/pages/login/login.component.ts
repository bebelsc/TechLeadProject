import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private router: Router,) { 

  }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group(
      {
        usuario: ['', Validators.required],
        senha: ['', Validators.required]
      }
    );
  }

  submitLogin(){
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.router.navigate(["/administrador"]);
  }
}
