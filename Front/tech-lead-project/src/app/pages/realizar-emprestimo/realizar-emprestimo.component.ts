import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { AuthService } from 'src/app/service/auth.service';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-realizar-emprestimo',
  templateUrl: './realizar-emprestimo.component.html',
  styleUrls: ['./realizar-emprestimo.component.scss']
})
export class RealizarEmprestimoComponent implements OnInit {

  emprestimoForm!: FormGroup;
  livroEncontrado: any;
  livroNaoEncontrado: boolean = false;
  user: UsuarioModel | null;

  constructor(private formBuilder: FormBuilder, private livroService: LivroService, private emprestimoService: EmprestimoService, private authService: AuthService) { 
    this.user = this.authService.getUserData();
  }

  ngOnInit(): void {
    this.emprestimoForm = this.formBuilder.group({
      idLivro: ['', Validators.required],
      nome: [''],
      autor: [''],
      quantidadeLivros: [''],
      quantidadeDias: ['', Validators.required]
    });
  }

  buscarLivro() {
    const idLivro = this.emprestimoForm.get('idLivro')?.value;

    if (idLivro) {
      this.livroService.getLivroById(idLivro).subscribe(
        (livro) => {
          this.livroEncontrado = livro;
          this.livroNaoEncontrado = false;
          this.emprestimoForm.patchValue({
            nome: livro.nome,
            autor: livro.autor,
            quantidadeLivros: livro.quantidadeLivros
          });
        },
        error => {
          console.error('Erro ao buscar livro:', error);
          this.resetForm();
          this.livroNaoEncontrado = true;
        }
      );
    } else {
      this.resetForm();
      console.error('ID do livro inválido');
    }
  }

  realizarEmprestimo() {
    debugger;
    if (this.emprestimoForm.valid) {
      const idLivroControl = this.emprestimoForm.get('idLivro');
      const quantidadeDiasControl = this.emprestimoForm.get('quantidadeDias');
  
      if (idLivroControl && quantidadeDiasControl) {
        const emprestimoData = {
          idLivro: idLivroControl.value,
          idUsuario: this.user?.idUsuario,
          quantidadeDias: quantidadeDiasControl.value,
          status: 'Criado',
          dataInicioEmprestimo: new Date()
        };
  
        this.emprestimoService.realizarEmprestimo(emprestimoData).subscribe(
          response => {
            console.log('Empréstimo realizado com sucesso!', response);
          },
          error => {
            console.error('Erro ao realizar empréstimo:', error);
          }
        );
      }
    }
  }

  cancelar() {
    this.resetForm();
  }

  private resetForm() {
    this.emprestimoForm.reset();
    this.livroEncontrado = null;
    this.livroNaoEncontrado = false;
  }
}
