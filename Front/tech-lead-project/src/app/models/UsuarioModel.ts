export class UsuarioModel {
    idUsuario: number;
    nome: string;
    tipo: string;
    email: string;
    senha: string;
    
  
    constructor(idUsuario: number, nome: string,tipo: string, email: string, senha: string, ) {
      this.idUsuario = idUsuario;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.tipo = tipo;
    }
  }
  