// usuario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) { }

  buscarUsuarioPorId(id: number): Observable<UsuarioModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UsuarioModel>(url);
  }
}
