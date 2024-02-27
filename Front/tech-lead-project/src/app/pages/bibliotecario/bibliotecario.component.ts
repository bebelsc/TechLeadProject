import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliotecario',
  templateUrl: './bibliotecario.component.html',
  styleUrls: ['./bibliotecario.component.scss']
})
export class BibliotecarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaRealizarEmprestimo() {
    this.router.navigate(['/realizar-emprestimo']);
  }

  irParaDevolverEmprestimo() {
    this.router.navigate(['/devolver-emprestimo']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
