import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmprestimoService } from 'src/app/service/emprestimo.service';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-devolver-emprestimo',
  templateUrl: './devolver-emprestimo.component.html',
  styleUrls: ['./devolver-emprestimo.component.scss']
})
export class DevolverEmprestimoComponent implements OnInit {

  devolucaoForm!: FormGroup;
  emprestimoEncontrado: any;

  constructor(private formBuilder: FormBuilder, private livroService: LivroService, private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    this.devolucaoForm = this.formBuilder.group({
      idEmprestimo: ['', Validators.required],
    });
  }

  pesquisarEmprestimo() {
    const idEmprestimo = this.devolucaoForm.get('idEmprestimo')?.value;

    if (idEmprestimo) {
      this.emprestimoService.getDetalhesEmprestimo(idEmprestimo).subscribe(
        (emprestimo: any) => {
          this.emprestimoEncontrado = emprestimo;
        },
        error => {
          console.error('Erro ao buscar empréstimo:', error);
          this.resetForm();
        }
      );
    } else {
      this.resetForm();
      console.error('ID do empréstimo inválido');
    }
  }

  devolverEmprestimo() {
    const idEmprestimo = this.devolucaoForm.get('idEmprestimo')?.value;

    if (idEmprestimo) {
      this.emprestimoService.devolverEmprestimo(idEmprestimo).subscribe(
        () => {
          console.log('Empréstimo devolvido com sucesso!');
        },
        (error: any) => {
          console.error('Erro ao devolver empréstimo:', error);
        }
      );
    } else {
      console.error('ID do empréstimo inválido');
    }
  }

  private resetForm() {
    this.devolucaoForm.reset();
    this.emprestimoEncontrado = null;
  }
}
