import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ClientesGuard } from './guards/clientes.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



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
  loadChildren: () => import('./clientes/clientes.module').then (m=>m.ClientesModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
