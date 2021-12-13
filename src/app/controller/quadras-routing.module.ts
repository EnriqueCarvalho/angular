import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from '../view/quadras/reservas/reservas.component';

const routes: Routes = [
  {
      path: '',
      component: ReservasComponent
  }
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuadrasRoutingModule { }
