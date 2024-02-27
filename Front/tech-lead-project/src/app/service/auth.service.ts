import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioModel } from 'src/app/models/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/usuario';

  private userSubject: BehaviorSubject<UsuarioModel | null>;
  public user$: Observable<UsuarioModel | null>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<UsuarioModel | null>(storedUser ? JSON.parse(storedUser) : null);
    this.user$ = this.userSubject.asObservable();
  }

  login(email: string, senha: string): Observable<UsuarioModel> {
    const body = { email, senha };
    return this.http.post<UsuarioModel>(`${this.apiUrl}/login`, body).pipe(
      tap((usuarioLogado: UsuarioModel) => {
        this.userSubject.next(usuarioLogado);
        localStorage.setItem('user', JSON.stringify(usuarioLogado));
      })
    );
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  getUserId(): number | null {
    const user = this.userSubject.value;
    return user ? user.idUsuario : null;
  }

  getUserData(): UsuarioModel | null {
    return this.userSubject.value;
  }
}
