import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public persona:Cliente = new Cliente();
  constructor(private clienteS:ClienteService,
    private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }
  public create():void{
    this.clienteS.create(this.persona).subscribe(
      response=>{this.router.navigate(['/cliente']);
      Swal.fire('El cliente fue agregado')
      });
  }
  cargarCliente():void{
    this.active.params.subscribe(params=>{
        let codigo=params['codigo'];
        if(codigo){
          this.clienteS.getCliente(codigo).subscribe(
            persona=>this.persona=persona
          )
        }
      }
      
    )
  }
  update():void{
    this.clienteS.update(this.persona).subscribe(
      response=>{this.router.navigate(['/cliente']);
      Swal.fire('El cliente fue modificado')
      });
  }
}
