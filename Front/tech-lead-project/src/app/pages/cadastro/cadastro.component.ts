import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroModel } from 'src/app/models/CadastroModel';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  submitCadastro() {
    // Implemente a lógica para cadastrar o usuário
    // var dadosCadastro = this.cadastroForm.getRawValue() as CadastroModel;
    // ... faça o que for necessário ...
    var dadosCadastro = this.cadastroForm.getRawValue() as CadastroModel;
    // Após cadastrar, redirecione para a página de login (ou outra página desejada)
    this.router.navigate(['/login']);
  }
}
