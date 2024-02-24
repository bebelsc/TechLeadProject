import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.scss']
})
export class SenhaComponent implements OnInit {

  esqueceuSenhaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.esqueceuSenhaForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitEsqueceuSenha() {
    // Implemente a lógica para enviar a senha por e-mail
    // var email = this.esqueceuSenhaForm.get('email')?.value;
    // ... faça o que for necessário ...

    // Redirecione para a página de login ou exiba uma mensagem de sucesso
    this.router.navigate(['/login']);
  }
}
