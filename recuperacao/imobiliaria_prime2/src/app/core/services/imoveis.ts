import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root'
})
export class Imoveis {
  private apiUrl = 'http://localhost:3002/imoveis';

  constructor(private http: HttpClient) { }

  getImovelById(id: number): Observable<Imovel[]>{
    return this.http.get<Imovel[]>(`${this.apiUrl}?id=${id}`);
  }

  getImovels(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(this.apiUrl);
  }

  createImovel(imovel: Imovel): Observable<Imovel[]>{
    return this.http.post<Imovel[]>(this.apiUrl, imovel);
  }

  updateImovel(id: number, imovel: Imovel): Observable<Imovel>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Imovel>(url, imovel);
  }

  deleteImovel(id: number): Observable<Imovel[]>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Imovel[]>(url);
  }

  listarTodos(): Observable<any[]> {
    return this.http.get<any[]>('/api/imoveis');
  }

}
