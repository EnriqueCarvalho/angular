import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ClientesGuard } from './guards/clientes.guard';
import { QuadrasGuard } from './guards/quadras.guard';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';



const routes: Routes = [
  {
    path:'login',    
    component:LoginComponent
  },
  { path: '', 
   //canActivate: [AuthGuard],
   component: HomeComponent 
  },
  { path: 'clientes',
  //canActivate: [AuthGuard],
  //canActivateChild: [ClientesGuard],
  loadChildren: () => import('./clientes/clientes.module').then (m=>m.ClientesModule)

  },
  { path: 'quadras',
  //canActivate: [AuthGuard],
  //canActivateChild: [QuadrasGuard],
  loadChildren: () => import('./quadras/quadras.module').then (m=>m.QuadrasModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
