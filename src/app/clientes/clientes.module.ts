import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhasReservasComponent } from './reservas/minhas-reservas.component';

import { NovaReservaComponent } from './nova-reserva/nova-reserva.component';


import { RatingModule } from 'ngx-bootstrap/rating';
import { ClientesRoutingModule } from 'src/app/clientes/clientes-routing.module';
import { QuadrasComponent } from '../quadras/quadras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    ReactiveFormsModule,
    RatingModule.forRoot()
  ]
})
export class ClientesModule { }
