import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProcedureComponent } from "./components/procedure/procedure.component";
import { AvailablePetsComponent } from "./components/available-pets/available-pets.component";

const routes: Routes = [
  { path: "adopt-procedure", component: ProcedureComponent },
  { path: "available-pets", component: AvailablePetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptRoutingModule {}
