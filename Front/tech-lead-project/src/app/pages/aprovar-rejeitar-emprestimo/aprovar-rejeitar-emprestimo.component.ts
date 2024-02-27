import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { Livro } from 'src/app/models/LivroModel'; 
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { Emprestimo } from 'src/app/models/EmprestimoModel'; 

@Component({
  selector: 'app-aprovar-rejeitar-emprestimo',
  templateUrl: './aprovar-rejeitar-emprestimo.component.html',
  styleUrls: ['./aprovar-rejeitar-emprestimo.component.scss']
})
export class AprovarRejeitarEmprestimoComponent {

  emprestimoId!: number;
  emprestimo!: Emprestimo;
  emprestimoLivro!: Livro;
  emprestimoUsuario!: UsuarioModel;

  constructor(private livroService: LivroService, private usuarioService: UsuarioService, private emprestimoService: EmprestimoService) {}

  pesquisarEmprestimo() {
    this.emprestimoService.getDetalhesEmprestimo(this.emprestimoId).subscribe(
      (detalhesEmprestimo) => {
        this.emprestimo = detalhesEmprestimo;
        
        this.obterDetalhesLivro();
        this.obterDetalhesUsuario();
      },
      (erro) => {
        console.error('Erro ao buscar detalhes do empréstimo:', erro);
      }
    );
  }

  obterDetalhesLivro() {
    debugger
    if (this.emprestimo && this.emprestimo.idlivro) {
      this.livroService.getLivroById(this.emprestimo.idlivro).subscribe(
        (detalhesLivro) => {
          this.emprestimoLivro = detalhesLivro;
        },
        (erro) => {
          console.error('Erro ao buscar detalhes do livro:', erro);
        }
      );
    }
  }

  obterDetalhesUsuario() {
    if (this.emprestimo && this.emprestimo.idusuario) {
      this.usuarioService.buscarUsuarioPorId(this.emprestimo.idusuario).subscribe(
        (detalhesUsuario) => {
          this.emprestimoUsuario = detalhesUsuario;
        },
        (erro) => {
          console.error('Erro ao buscar detalhes do usuário:', erro);
        }
      );
    }
  }
  
  aprovarEmprestimo() {
    this.emprestimoService.aprovarRejeitarEmprestimo(this.emprestimo.id, true)
      .subscribe(
        response => {
          console.log('Empréstimo aprovado com sucesso', response);
        },
        error => {
          console.error('Erro ao aprovar empréstimo', error);
        }
      );
}

rejeitarEmprestimo() {
  this.emprestimoService.aprovarRejeitarEmprestimo(this.emprestimo.id, false)
    .subscribe(
      response => {
        console.log('Empréstimo rejeitado com sucesso', response);
      },
      error => {
        console.error('Erro ao rejeitar empréstimo', error);
      }
    );
}

}
