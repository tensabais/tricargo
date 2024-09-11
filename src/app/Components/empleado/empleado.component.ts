import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service'; 
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = []; // Inicialización con un array vacío
  constructor(private empleadoS:EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoS.getEmpleados().subscribe(
      empleados=>this.empleados=empleados
    );
  }
  delete(persona:Empleado):void{
    Swal.fire({
      title: '¿Está seguro de eliminar al empleado?',
      text: "¡No puede deshacer la acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoS.delete(persona.codigo).subscribe(
          response=>this.empleados=this.empleados.filter(
            personas=>personas!=persona
          )
        )
        Swal.fire(
          '¡Borrado!',
          'El empleado ha sido eliminado',
          'success'
        )
      }
    })
  }
}
