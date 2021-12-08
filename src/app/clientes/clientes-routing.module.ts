import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NovaReservaComponent } from "./nova-reserva/nova-reserva.component";
import { MinhasReservasComponent } from "./reservas/minhas-reservas.component";


const routes: Routes = [
    {
        path: '',
        component: MinhasReservasComponent
    },
    {
        path:'novaReserva',
        component: NovaReservaComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }