import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../service/livro.service';  // Importe o serviço de livros

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.component.html',
  styleUrls: ['./lista-livro.component.scss']
})
export class ListaLivroComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livroService.listarLivros().subscribe(
      (livros: Livro[]) => {
        this.livros = livros;
      },
      error => {
        console.error('Erro ao carregar lista de livros:', error);
      }
    );
  }
}

interface Livro {
  id: number;
  nome: string;
  autor: string;
  dataCadastro: Date;
  idUsuario: number;
}
