import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint='http://localhost:2020/api/cliente/cliente';
  private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient) { }
  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,cliente,
      {headers:this.httpHeaders});
  }
  delete(codigo:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${codigo}`,
    {headers:this.httpHeaders});
  }
  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>
    (`${this.urlEndPoint}/${cliente.codigo}`, cliente,
    {headers:this.httpHeaders});
  }
  getCliente(codigo:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${codigo}`)
  }
}
