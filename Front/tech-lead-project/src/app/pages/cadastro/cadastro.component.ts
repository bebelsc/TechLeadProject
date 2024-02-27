import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroModel } from 'src/app/models/CadastroModel';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { UsuarioService } from 'src/app/service/usuario.service'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  submitCadastro() {
    if (this.cadastroForm.valid) {
      var dadosCadastro = this.cadastroForm.getRawValue() as UsuarioModel;

      this.usuarioService.criarUsuario(dadosCadastro).subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso:', response);
        },
        error => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      );
    }
  }
}
