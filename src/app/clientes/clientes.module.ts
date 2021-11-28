import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhasReservasComponent } from './minhas-reservas/minhas-reservas.component';
import { ClientesRoutingModule } from './clientes-routing.module';



@NgModule({
  declarations: [
    MinhasReservasComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
