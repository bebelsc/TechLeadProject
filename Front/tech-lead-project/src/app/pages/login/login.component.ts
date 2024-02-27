import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { AuthService } from 'src/app/service/auth.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  submitLogin() {
    const dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.authService.login(dadosLogin.email, dadosLogin.senha).subscribe(
      (usuarioLogado) => {
        if (usuarioLogado.tipo === 'Administrador' && usuarioLogado.idUsuario !== null && usuarioLogado.idUsuario !== undefined) {
          this.router.navigate(['/administrador', usuarioLogado.idUsuario]);
        } else if (usuarioLogado.tipo === 'Cliente' && usuarioLogado.idUsuario !== null && usuarioLogado.idUsuario !== undefined) {
          this.router.navigate(['/cliente', usuarioLogado.idUsuario]);
        } else if (usuarioLogado.tipo === 'Bibliotecario' && usuarioLogado.idUsuario !== null && usuarioLogado.idUsuario !== undefined) {
          this.router.navigate(['/bibliotecario']);
        } else {
          console.error('Tipo de usuário desconhecido:', usuarioLogado.tipo);
        }
      },
      (erro) => {
        console.error('Erro ao realizar login:', erro);
      }
    );
  }
}
