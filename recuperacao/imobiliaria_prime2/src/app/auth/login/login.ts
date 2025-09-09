import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.erro = '';
    this.auth.login(this.email, this.senha).subscribe(user => {
      if (user) {
        this.router.navigate(['/']);
      } else {
        this.erro = 'Email ou senha inválidos';
      }
    });
  }
}