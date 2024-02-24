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
          // Verifique se os campos do formulário estão definidos antes de chamar patchValue
          if (this.livroForm.get('nome') && this.livroForm.get('autor')) {
            this.livroForm.patchValue({
              nome: livro.nome,
              autor: livro.autor
            });
          }
        },
        error => {
          console.error('Erro ao buscar livro:', error);
          // Tratar o erro conforme necessário
        }
      );
    } else {
      console.error('ID do livro inválido');
      // Tratar conforme necessário, talvez exibir uma mensagem para o usuário
    }
  }
  

  editarLivro() {
    // Implementar lógica de edição do livro
    // Use this.livroEncontrado.id para obter o ID do livro
    // Atualize as propriedades nome e autor com this.livroForm.get('nome').value, this.livroForm.get('autor').value
    // Chame o serviço para editar o livro
  }

  voltar() {
    // Implementar lógica de voltar
    //this.router.navigate(...)
  }
}
