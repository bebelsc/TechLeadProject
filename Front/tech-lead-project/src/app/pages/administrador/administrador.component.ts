import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {

  constructor(private router: Router) { }

  navegarPara(opcao: string) {
    switch (opcao) {
      case 'cadastrar':
        this.router.navigate(['/cadastro-livro']);
        break;
      case 'editar':
        this.router.navigate(['/edita-livro']);
        break;
      case 'excluir':
        this.router.navigate(['/deleta-livro']);
        break;
      case 'listar':
        this.router.navigate(['/lista-livro']);
        break;
      case 'detalhar':
        this.router.navigate(['/pesquisa-livro']);
        break;
      default:
        break;
    }
  }
}
