import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhasReservasComponent } from './reservas/minhas-reservas.component';
import { ClientesRoutingModule } from '../../controller/clientes-routing.module';
import { NovaReservaComponent } from './nova-reserva/nova-reserva.component';
import { FormsModule } from '@angular/forms';
import { QuadrasComponent } from './quadras/quadras.component';
import { RatingModule } from 'ngx-bootstrap/rating';



@NgModule({
  declarations: [
    MinhasReservasComponent,
    NovaReservaComponent,
    QuadrasComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    RatingModule.forRoot()
  ]
})
export class ClientesModule { }
