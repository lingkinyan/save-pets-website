import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLandingComponent } from "./admin-landing/admin-landing.component";
import { LoginComponent } from "./components/login/login.component";
import { AddPetComponent } from "./components/add-pet/add-pet.component";

const routes: Routes = [
  { path: "", component: AdminLandingComponent },
  { path: "login", component: LoginComponent },
  { path: "add-pet", component: AddPetComponent },
  { path: "edit-pet/:id", component: AddPetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
