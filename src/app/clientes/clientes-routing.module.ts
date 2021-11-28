import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MinhasReservasComponent } from "./minhas-reservas/minhas-reservas.component";


const routes: Routes = [
    {
        path: '',
        component: MinhasReservasComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }