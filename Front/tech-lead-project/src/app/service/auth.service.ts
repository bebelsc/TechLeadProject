import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/usuario';

  private userSubject: BehaviorSubject<UsuarioModel | null>;
  public user$: Observable<UsuarioModel | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UsuarioModel | null>(null);
    this.user$ = this.userSubject.asObservable();
  }
  
  login(email: string, senha: string): Observable<UsuarioModel> {
    const body = { email, senha };
    return this.http.post<UsuarioModel>(`${this.apiUrl}/login`, body);
  }

  // Método para fazer logout
  logout() {
    this.userSubject.next(null);
  }

  // Método para obter o ID do usuário atual
  getUserId(): number | null {
    const user = this.userSubject.value;
    return user ? user.idUsuario : null;
  }
}
