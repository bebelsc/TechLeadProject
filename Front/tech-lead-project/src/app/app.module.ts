import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { SenhaComponent } from './pages/senha/senha.component';
import { CadastroLivroComponent } from './pages/cadastro-livro/cadastro-livro.component';
import { PesquisaLivroComponent } from './pages/pesquisa-livro/pesquisa-livro.component';
import { DeletaLivroComponent } from './pages/deleta-livro/deleta-livro.component';
import { EditaLivroComponent } from './pages/edita-livro/edita-livro.component';
import { ListaLivroComponent } from './pages/lista-livro/lista-livro.component';
import { HttpClientModule } from '@angular/common/http';
import { BibliotecarioComponent } from './pages/bibliotecario/bibliotecario.component';
import { RealizarEmprestimoComponent } from './pages/realizar-emprestimo/realizar-emprestimo.component';
import { DevolverEmprestimoComponent } from './pages/devolver-emprestimo/devolver-emprestimo.component';
import { AprovarRejeitarEmprestimoComponent } from './pages/aprovar-rejeitar-emprestimo/aprovar-rejeitar-emprestimo.component';
import { ListarEmprestimosComponent } from './pages/listar-emprestimos/listar-emprestimos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AdministradorComponent,
    ClienteComponent,
    SenhaComponent,
    CadastroLivroComponent,
    PesquisaLivroComponent,
    DeletaLivroComponent,
    EditaLivroComponent,
    ListaLivroComponent,
    BibliotecarioComponent,
    RealizarEmprestimoComponent,
    DevolverEmprestimoComponent,
    AprovarRejeitarEmprestimoComponent,
    ListarEmprestimosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
