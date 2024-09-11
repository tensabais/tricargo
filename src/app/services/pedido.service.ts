import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Pedido } from '../models/pedido';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private urlEndPoint='http://localhost:2020/api/pedido/pedido';
  private httpHeaders=new HttpHeaders ({'Content-type':'application/json'})
  constructor(private http:HttpClient) { }
  getPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.urlEndPoint);
  }
  create(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.urlEndPoint, pedido, 
      {headers:this.httpHeaders});
  }
  delete(codigo:number):Observable<Pedido>{
    return this.http.delete<Pedido>(`${this.urlEndPoint}/${codigo}`,
    {headers:this.httpHeaders});
  }
  update(pedido:Pedido):Observable<Pedido>{
    return this.http.put<Pedido>(`${this.urlEndPoint}/${pedido.codigo}`, pedido,
    {headers:this.httpHeaders});
  }
  getPedido(codigo:number):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.urlEndPoint}/${codigo}`);
    
  }
}
