import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';


  constructor(private router: Router, private http: HttpClient) { }

  registrar(usuario: any):Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(res => {
        if(res.length>0){
          return throwError(()=>new Error ("Usuário Já Existe."));
        }
        return this.http.post<any>(this.apiUrl, usuario);
      })
    );
  }

  login(credenciais: any):Observable<boolean>{
    return this.http.get<any[]>(
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuario => {
          if (usuario.length > 0) {
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
            return true;
          }
          return false;
        })
    );
  }

  logout(){
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(["/login"]);
  }

}
