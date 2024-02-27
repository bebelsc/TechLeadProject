import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from 'src/app/service/livro.service';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent {

  livroForm: FormGroup;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivroService,
    private authService: AuthService,private route: ActivatedRoute, private router: Router
  ) {
    this.livroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      autor: ['', Validators.required],
    });
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  
  cadastrarLivro() {
    debugger
    if (this.livroForm.valid && this.user) {
      const nomeControl = this.livroForm.get('nome');
      const autorControl = this.livroForm.get('autor');

      const data = new Date();

      const datePipe = new DatePipe('en-US');
      const formattedDate = datePipe.transform(data, 'yyyy-MM-dd'); 
      if (nomeControl && autorControl) {
        const livroData = {
          nome: nomeControl.value,
          autor: autorControl.value,
          dataCadastro: formattedDate,
          user: this.user
        };

        this.livroService.cadastrarLivro(livroData).subscribe(
          response => {
            console.log('Livro cadastrado com sucesso!', response);
          },
          error => {
            console.error('Erro ao cadastrar livro:', error);
          }
        );
      }
    }
  }
  
}
