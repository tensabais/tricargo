import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Pedido } from '../../models/pedido';
import { PedidoService} from '../../services/pedido.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formul',
  templateUrl: './formul.component.html',
  styleUrls: ['./formul.component.css']
})
export class FormulComponent implements OnInit {
  public persona:Pedido=new Pedido();
  constructor(private pedidoS:PedidoService, 
    private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPedido();
  }
  public create():void{
    this.pedidoS.create(this.persona).subscribe(
      response=>{this.router.navigate(['/pedido']);
      Swal.fire('El pedido fue agregado')
      });
  }
  cargarPedido():void{
    this.active.params.subscribe(params=>{
        let codigo=params['codigo'];
        if(codigo){
            this.pedidoS.getPedido(codigo).subscribe(
              persona=>this.persona=persona
            )
        }
      }
      
    )
  }
  update():void{
    this.pedidoS.update(this.persona).subscribe(
      response=>{this.router.navigate(['/pedido']);
      Swal.fire('El pedido fue modificado')
      }
    )
  }
  
}
