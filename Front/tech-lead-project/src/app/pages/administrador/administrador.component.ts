import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {

  userId: string | null;


  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) {
    this.userId = localStorage.getItem('userId');
  }
  

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
      case 'logout':
        this.router.navigate(['/login']);
        break;
      default:
        break;
    }
  }
}
