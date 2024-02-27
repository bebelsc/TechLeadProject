import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private apiUrl = 'http://localhost:8080/api/emprestimos'; 

  constructor(private http: HttpClient) { }

  getDetalhesEmprestimo(idEmprestimo: number): Observable<any> {
    const url = `${this.apiUrl}/${idEmprestimo}`;
    return this.http.get(url);
  }

  devolverEmprestimo(idEmprestimo: number): Observable<any> {
    const url = `${this.apiUrl}/devolver-emprestimo/${idEmprestimo}`; 
    return this.http.post(url, {});
  }

  realizarEmprestimo(emprestimoData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/criar-emprestimo`, emprestimoData);
  }

  aprovarRejeitarEmprestimo(idEmprestimo: number, aprovar: boolean): Observable<any> {
    const url = `${this.apiUrl}/aprovar-rejeitar-emprestimo/${idEmprestimo}`;
    
    const params = new HttpParams().set('aprovar', aprovar.toString());

    return this.http.post(url, null, { params });
  }
}
