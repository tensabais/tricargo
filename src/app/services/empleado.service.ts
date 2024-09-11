import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Empleado} from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private urlEndPoint='http://localhost:2020/api/empleado/empleado'
  private httpHeaders=new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient) { }
  getEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.urlEndPoint);
  }
  create(empleado:Empleado):Observable<Empleado>{
    return this.http.post<Empleado>(this.urlEndPoint,empleado,{headers:this.httpHeaders});
  }
  delete(codigo:number):Observable<Empleado>{
    return this.http.delete<Empleado>(`${this.urlEndPoint}/${codigo}`,
    {headers:this.httpHeaders});
  }
  update(empleado:Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(`${this.urlEndPoint}/${empleado.codigo}`, empleado,
    {headers:this.httpHeaders});
  }
  getEmpleado(codigo:number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.urlEndPoint}/${codigo}`);
  }
}
