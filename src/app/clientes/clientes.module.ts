import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhasReservasComponent } from './reservas/minhas-reservas.component';

import { NovaReservaComponent } from './nova-reserva/nova-reserva.component';
import { FormsModule } from '@angular/forms';

import { RatingModule } from 'ngx-bootstrap/rating';
import { ClientesRoutingModule } from 'src/app/clientes/clientes-routing.module';
import { QuadrasComponent } from '../quadras/quadras.component';



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
