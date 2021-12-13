import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './controller/guards/auth.guard';
import { ClientesGuard } from './controller/guards/clientes.guard';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';



const routes: Routes = [
  {
    path:'login',    
    component:LoginComponent
  },
  { path: '', 
 // canActivate: [AuthGuard],
   component: HomeComponent 
  },
  { path: 'clientes',
  //canActivate: [AuthGuard],
  //canActivateChild: [ClientesGuard],
  loadChildren: () => import('./view/clientes/clientes.module').then (m=>m.ClientesModule)

  },
  { path: 'quadras',
  //canActivate: [AuthGuard],
  //canActivateChild: [ClientesGuard],
  loadChildren: () => import('./view/quadras/quadras.module').then (m=>m.QuadrasModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
