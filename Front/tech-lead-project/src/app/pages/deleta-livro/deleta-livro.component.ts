import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro } from 'src/app/models/LivroModel';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-deleta-livro',
  templateUrl: './deleta-livro.component.html',
  styleUrls: ['./deleta-livro.component.scss']
})
export class DeletaLivroComponent implements OnInit {

  livroForm!: FormGroup;
  livroEncontrado: Livro | null = null;

  constructor(private formBuilder: FormBuilder, private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroForm = this.formBuilder.group({
      idLivro: ['', Validators.required],
      nome: [''],
      autor: ['']
    });
  }

  pesquisarLivro() {
    const idLivro = this.livroForm.get('idLivro')?.value;

    if (idLivro) {
      this.livroService.getLivroById(idLivro).subscribe(
        (livro: Livro) => {
          this.livroEncontrado = livro;
          this.livroForm.patchValue({
            nome: livro.nome,
            autor: livro.autor
          });
        },
        error => {
          console.error('Erro ao buscar livro:', error);
          this.resetForm();
        }
      );
    } else {
      this.resetForm();
      console.error('ID do livro inválido');
    }
  }

  deletarLivro() {
    const idLivro = this.livroForm.get('idLivro')?.value;

    if (idLivro) {
      this.livroService.deleteLivro(idLivro).subscribe(
        () => {
          console.log('Livro deletado com sucesso!');
          this.resetForm();
        },
        error => {
          console.error('Erro ao deletar livro:', error);
        }
      );
    }
  }

  cancelarDelecao() {
    this.resetForm();
  }

  private resetForm() {
    this.livroForm.reset();
    this.livroEncontrado = null;
  }
}
