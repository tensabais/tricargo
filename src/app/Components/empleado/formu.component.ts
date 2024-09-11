import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})
export class FormuComponent implements OnInit {
  public persona:Empleado = new Empleado();
  constructor(private empleadoS:EmpleadoService, 
    private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPersona();
  }
  public create():void{
    this.empleadoS.create(this.persona).subscribe(
      response=>{this.router.navigate(['/empleado']);
      Swal.fire('El empleado fue agregado')
    }
    )
  }
  cargarPersona():void{
    this.active.params.subscribe(params=>{
      let codigo=params['codigo'];
      if(codigo){
        this.empleadoS.getEmpleado(codigo).subscribe(
          persona=>this.persona=persona
        )
      }
      }
    )
  }
  update():void{
    this.empleadoS.update(this.persona).subscribe(
      response=>{this.router.navigate(['/empleado']);
      Swal.fire('El empleado fue modificado')
    }
    )
  }
}
