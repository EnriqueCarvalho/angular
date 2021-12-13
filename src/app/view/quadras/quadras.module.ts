import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadrasRoutingModule } from 'src/app/controller/quadras-routing.module';
import { ReservasComponent } from './reservas/reservas.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';



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
