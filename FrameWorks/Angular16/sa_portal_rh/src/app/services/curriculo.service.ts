import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  private apiUrl = "http://localhost:3002/curriculos";

  constructor(private http: HttpClient) { }

  getCurriculoByUsuarioId(id: number): Observable<Curriculo[]>{
    return this.http.get<Curriculo[]>(`${this.apiUrl}?usuarioId=${id}`);
  }

  getCurriculos(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
  }

  createCurriculo(curriculo: Curriculo): Observable<Curriculo[]>{
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  updateCurriculo(id: number, curriculo: Curriculo): Observable<Curriculo>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo>(url, curriculo);
  }

  deleteCurriculo(id: number): Observable<Curriculo[]>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(url);
  }

  listarTodos(): Observable<any[]> {
    return this.http.get<any[]>('/api/curriculos');
  }

}
