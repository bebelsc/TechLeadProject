import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-gerenciar-livros',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  constructor(private router: Router) { }

  cadastrarLivro() {
    this.router.navigate(['/cliente/cadastrar-livro']);
  }

  editarLivro() {
    // Implemente a lógica para editar o livro
  }

  deletarLivro() {
    // Implemente a lógica para deletar o livro
  }
}
