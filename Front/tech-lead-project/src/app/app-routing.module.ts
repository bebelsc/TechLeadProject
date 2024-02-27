import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SenhaComponent } from './pages/senha/senha.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CadastroLivroComponent } from './pages/cadastro-livro/cadastro-livro.component';
import { EditaLivroComponent } from './pages/edita-livro/edita-livro.component';
import { ListaLivroComponent } from './pages/lista-livro/lista-livro.component';
import { DeletaLivroComponent } from './pages/deleta-livro/deleta-livro.component';
import { PesquisaLivroComponent } from './pages/pesquisa-livro/pesquisa-livro.component';
import { BibliotecarioComponent } from './pages/bibliotecario/bibliotecario.component';
import { RealizarEmprestimoComponent } from './pages/realizar-emprestimo/realizar-emprestimo.component';
import { DevolverEmprestimoComponent } from './pages/devolver-emprestimo/devolver-emprestimo.component';
import { ListarEmprestimosComponent } from './pages/listar-emprestimos/listar-emprestimos.component';
import { AprovarRejeitarEmprestimoComponent } from './pages/aprovar-rejeitar-emprestimo/aprovar-rejeitar-emprestimo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch:"full", redirectTo: "login"},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'senha', component: SenhaComponent },
  { path: 'administrador/:id', component: AdministradorComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'cadastro-livro', component: CadastroLivroComponent },
  { path: 'edita-livro', component: EditaLivroComponent },
  { path: 'lista-livro', component: ListaLivroComponent },
  { path: 'deleta-livro', component: DeletaLivroComponent },
  { path: 'pesquisa-livro', component: PesquisaLivroComponent },
  { path: 'bibliotecario', component: BibliotecarioComponent },
  { path: 'realizar-emprestimo', component: RealizarEmprestimoComponent },
  { path: 'devolver-emprestimo', component: DevolverEmprestimoComponent },
  { path: 'aprovar-recusar-emprestimo', component: AprovarRejeitarEmprestimoComponent },
  { path: 'listar-emprestimos', component: ListarEmprestimosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
