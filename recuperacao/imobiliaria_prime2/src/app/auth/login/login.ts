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
    this.auth.login(this.email, this.senha).subscribe({
      next: (usuarios) => {
        if (usuarios && usuarios.length > 0) {
          const usuario = usuarios[0];

          this.auth.usuarioAtual(usuario);

          if (usuario.tipo === 'cliente') {
            this.router.navigate(['/meus-interesses']);
          } else if (usuario.tipo === 'corretor') {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/']); 
          }
        } else {
          this.erro = 'Email ou senha inválidos';
        }
      },
      error: () => {
        this.erro = 'Erro no servidor. Tente novamente.';
      }
    });
  }
}