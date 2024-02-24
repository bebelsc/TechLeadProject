import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from 'src/app/service/livro.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent {

  livroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivroService,
    private authService: AuthService
  ) {
    this.livroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      autor: ['', Validators.required],
    });
  }

  cadastrarLivro() {
    if (this.livroForm.valid) {
      const nomeControl = this.livroForm.get('nome');
      const autorControl = this.livroForm.get('autor');
  
      if (nomeControl && autorControl) {
        const livroData = {
          nome: nomeControl.value,
          autor: autorControl.value,
          dataCadastro: new Date(),
          userId: this.authService.getUserId() || 0 // Supondo que getUserId retorne um número ou nulo
        };
  
        this.livroService.cadastrarLivro(livroData).subscribe(
          response => {
            console.log('Livro cadastrado com sucesso!', response);
            // Redirecionar ou realizar ações adicionais conforme necessário
          },
          error => {
            console.error('Erro ao cadastrar livro:', error);
            // Tratar o erro conforme necessário
          }
        );
      }
    }
  }
  
}
