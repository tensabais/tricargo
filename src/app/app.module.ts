import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AcercadeComponent } from './Components/acercade/acercade.component';
import { ContactenosComponent } from './Components/contactenos/contactenos.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { ClienteService } from './services/cliente.service';
import { FormComponent } from './Components/cliente/form.component';
import { EmpleadoComponent } from './Components/empleado/empleado.component';
import { EmpleadoService } from './services/empleado.service';
import { FormuComponent } from './Components/empleado/formu.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { PedidoService } from './services/pedido.service';
import { FormulComponent } from './Components/pedido/formul.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'acercade',component:AcercadeComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'cliente',component:ClienteComponent },
  {path:'empleado',component:EmpleadoComponent },
  {path:'pedido',component:PedidoComponent },
  {path:'form',component:FormComponent },
  {path:'form/:codigo',component:FormComponent },
  {path:'formu',component:FormuComponent },
  {path:'formu/:codigo',component:FormuComponent },
  {path:'formul',component:FormulComponent },
  {path:'formul/:codigo',component:FormulComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AcercadeComponent,
    ContactenosComponent,
    ClienteComponent,
    EmpleadoComponent,
    FormComponent,
    FormuComponent,
    PedidoComponent,
    FormulComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClienteService,
    EmpleadoService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
