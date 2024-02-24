import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;

  constructor() {
    this.userSubject = new BehaviorSubject<User | null>(null);
    this.user$ = this.userSubject.asObservable();
  }

  // Método para fazer login (chamado após a autenticação bem-sucedida no backend)
  login(user: User) {
    this.userSubject.next(user);
    // Salvar informações do usuário no localStorage ou sessionStorage, se necessário
  }

  // Método para fazer logout
  logout() {
    this.userSubject.next(null);
    // Limpar informações do usuário do localStorage ou sessionStorage, se necessário
  }

  // Método para obter o ID do usuário atual
  getUserId(): number | null {
    const user = this.userSubject.value;
    return user ? user.id : null;
  }
}

interface User {
  id: number;
  // Adicione outras propriedades do usuário conforme necessário
}
