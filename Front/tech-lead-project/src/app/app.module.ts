import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { SenhaComponent } from './pages/senha/senha.component';
import { CadastroLivroComponent } from './pages/cadastro-livro/cadastro-livro.component';
import { PesquisaLivroComponent } from './pages/pesquisa-livro/pesquisa-livro.component';
import { DeletaLivroComponent } from './pages/deleta-livro/deleta-livro.component';
import { EditaLivroComponent } from './pages/edita-livro/edita-livro.component';
import { ListaLivroComponent } from './pages/lista-livro/lista-livro.component';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
