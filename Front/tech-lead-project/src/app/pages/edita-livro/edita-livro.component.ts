// edita-livro.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/LivroModel';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-edita-livro',
  templateUrl: './edita-livro.component.html',
  styleUrls: ['./edita-livro.component.scss']
})
export class EditaLivroComponent implements OnInit {

  livroEncontrado!: Livro;
  livroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private livroService: LivroService
  ) { }

  ngOnInit(): void {
    this.livroForm = this.formBuilder.group({
      idLivro: ['', Validators.required],
      nome: ['', Validators.required],
      autor: ['', Validators.required]
    });
  }

  pesquisarLivro() {
    const idLivroControl = this.livroForm.get('idLivro');
  
    if (idLivroControl && idLivroControl.value !== null) {
      const idLivro = idLivroControl.value;
      this.livroService.getLivroById(idLivro).subscribe(
        (livro: Livro) => {
          this.livroEncontrado = livro;
          if (this.livroForm.get('nome') && this.livroForm.get('autor')) {
            this.livroForm.patchValue({
              nome: livro.nome,
              autor: livro.autor
            });
          }
        },
        error => {
          console.error('Erro ao buscar livro:', error);
        }
      );
    } else {
      console.error('ID do livro inválido');
    }
  }


  editarLivro() {
    if (this.livroEncontrado && this.livroForm && this.livroForm.get('nome') && this.livroForm.get('autor')) {
      const idLivro = this.livroForm.get('idLivro')?.value;
      const novoNome = this.livroForm.get('nome')?.value;
      const novoAutor = this.livroForm.get('autor')?.value;
  
      if (idLivro) {
        if (idLivro !== null && novoNome !== null && novoAutor !== null) {
          this.livroService.editarLivro(idLivro, { nome: novoNome, autor: novoAutor })
            .subscribe(
              livroEditado => {
                console.log('Livro editado com sucesso:', livroEditado);
              },
              erro => {
                console.error('Erro ao editar livro:', erro);
              }
            );
        } else {
          console.error('Os novos dados do livro são inválidos.');
        }
      } else {
        console.error('O ID do livro é inválido.');
      }
    } else {
      console.error('O livro ou o formulário são nulos ou indefinidos.');
    }
  }  

  voltar() {
    this.router.navigate(['/administrador'])
  }
}
