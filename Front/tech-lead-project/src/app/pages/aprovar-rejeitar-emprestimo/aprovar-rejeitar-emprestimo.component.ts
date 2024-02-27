import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { Livro } from 'src/app/models/LivroModel'; 
import { Usuario } from 'src/app/models/UsuarioModel';
import { Emprestimo } from 'src/app/models/EmprestimoModel'; 

@Component({
  selector: 'app-aprovar-rejeitar-emprestimo',
  templateUrl: './aprovar-rejeitar-emprestimo.component.html',
  styleUrls: ['./aprovar-rejeitar-emprestimo.component.scss']
})
export class AprovarRejeitarEmprestimoComponent {

  emprestimoId: number;
  emprestimo: Emprestimo;
  emprestimoLivro: Livro;
  emprestimoUsuario: Usuario;

  constructor(private livroService: LivroService, private usuarioService: UsuarioService, private emprestimoService: EmprestimoService) {}

  pesquisarEmprestimo() {
    // Lógica para pesquisar empréstimo por ID e preencher informações
    // Use this.emprestimoService.getEmprestimoById(this.emprestimoId) para buscar o empréstimo
    // Preencha this.emprestimo, this.emprestimoLivro e this.emprestimoUsuario com os resultados
  }

  aprovarEmprestimo() {
    // Lógica para aprovar empréstimo
    // Use this.emprestimoService.aprovarEmprestimo(this.emprestimo.id) para aprovar
  }

  rejeitarEmprestimo() {
    // Lógica para rejeitar empréstimo
    // Use this.emprestimoService.rejeitarEmprestimo(this.emprestimo.id) para rejeitar
  }
}
