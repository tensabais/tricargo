import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes:Cliente[] = []; // Inicialización con un array vacío
  constructor(private clienteS:ClienteService) { }

  ngOnInit(): void {
    this.clienteS.getClientes().subscribe(
      clientes=>this.clientes=clientes
    );
  }
  delete(persona:Cliente):void{
    Swal.fire({
      title: '¿Está seguro de eliminar al cliente?',
      text: "¡No puede deshacer la acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteS.delete(persona.codigo).subscribe(
          response=>this.clientes=this.clientes.filter(
            personas=>personas!=persona
          )
        )
        Swal.fire(
          '¡Borrado!',
          'El cliente ha sido eliminado',
          'success'
        )
      }
    })
  }
}
