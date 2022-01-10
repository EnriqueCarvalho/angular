import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasComponent } from './reservas/reservas.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { QuadrasRoutingModule } from './quadras-routing.module';



@NgModule({
  declarations: [
    ReservasComponent
  ],
  imports: [
    CommonModule,
    QuadrasRoutingModule,
    AccordionModule.forRoot(),
  ]
})
export class QuadrasModule { }
