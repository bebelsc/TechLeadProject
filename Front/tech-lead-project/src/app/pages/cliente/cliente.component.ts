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
    this.router.navigate(['/cadastro-livro']);
  }

  editarLivro() {
    this.router.navigate(['/edita-livro']);
  }

  deletarLivro(){
    this.router.navigate(['/deleta-livro']);
  }

  fazerEmprestimo(){
    this.router.navigate(['/realizar-emprestimo'])
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
