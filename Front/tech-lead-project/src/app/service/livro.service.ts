import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/LivroModel';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  
  private apiUrl = 'http://localhost:8080/api/livro';

  constructor(private http: HttpClient) {}

  cadastrarLivro(livroData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastrar`, livroData);
  }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl + '/livros');
  }

  getLivroById(id: number): Observable<Livro> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Livro>(url);
  }

  listarLivros(): Observable<any> {
      return this.http.get(`${this.apiUrl}/listar`);
  }

  deleteLivro(idLivro: number): Observable<void> {
    const url = `${this.apiUrl}/excluir/${idLivro}`;
 
    return this.http.delete<void>(url);
  }

  editarLivro(idLivro: number, novoLivro: any): Observable<any> {
    const url = `${this.apiUrl}/editar/${idLivro}`;
    return this.http.put(url, novoLivro);
  }
}
