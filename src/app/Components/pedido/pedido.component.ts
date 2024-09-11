import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Pedido } from '../../models/pedido';
import { PedidoService} from '../../services/pedido.service';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos:Pedido[] = []; // Inicialización con un array vacío
  constructor(private pedidoS:PedidoService) { }

  ngOnInit(): void {
    this.pedidoS.getPedidos().subscribe(
      pedidos=>this.pedidos=pedidos
    );
  }
  delete(persona:Pedido):void{
    Swal.fire({
      title: '¿Está seguro de eliminar el pedido?',
      text: "¡No puede deshacer la acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidoS.delete(persona.codigo).subscribe(
          response=>this.pedidos=this.pedidos.filter(
            personas=>personas!=persona
          )
        )
        Swal.fire(
          '¡Borrado!',
          'El pedido ha sido eliminado',
          'success'
        )
      }
    })
  }

}
