import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicos/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// implementes da interface (classe abstrata)
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService, private router: Router){}
  // método obrigatório da classe CanActivate
  canActivate(): boolean{
    if(this.authService.estaAutenticado()){
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
