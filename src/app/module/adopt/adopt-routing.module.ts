import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProcedureComponent } from "./components/procedure/procedure.component";
import { AvailablePetsComponent } from "./components/available-pets/available-pets.component";
import { PetInfoComponent } from "./components/pet-info/pet-info.component";

const routes: Routes = [
  { path: "adopt-procedure", component: ProcedureComponent },
  { path: "available-pets", component: AvailablePetsComponent },
  { path: "pet-info/:id", component: PetInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptRoutingModule {}
