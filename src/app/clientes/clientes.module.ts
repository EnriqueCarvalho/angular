import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhasReservasComponent } from './reservas/minhas-reservas.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { NovaReservaComponent } from './nova-reserva/nova-reserva.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MinhasReservasComponent,
    NovaReservaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
