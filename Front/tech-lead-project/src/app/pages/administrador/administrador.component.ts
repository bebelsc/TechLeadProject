import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {

  constructor(private router: Router,private authService: AuthService) { }

  navegarPara(opcao: string) {
    const idUsuario = this.authService.getUserId();

    let navigationExtras: any = {}; // Pode ser ajustado para NavigationExtras se necessário

    if (idUsuario !== null) {
      navigationExtras = { queryParams: { idUsuario } };
    }

    switch (opcao) {
      case 'cadastrar':
        this.router.navigate(['/cadastro-livro'],navigationExtras);
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
