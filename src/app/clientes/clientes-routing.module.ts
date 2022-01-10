import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NovaReservaComponent } from "./nova-reserva/nova-reserva.component";
import { QuadrasComponent } from "../quadras/quadras.component";
import { MinhasReservasComponent } from "../clientes/reservas/minhas-reservas.component";


const routes: Routes = [
    {
        path: '',
        component: MinhasReservasComponent
    },
    {
        path:'novaReserva',
        component: NovaReservaComponent
    },
    {
        path:'quadras',
        component: QuadrasComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }