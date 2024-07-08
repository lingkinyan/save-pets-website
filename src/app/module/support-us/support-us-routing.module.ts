import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupportUsLandingComponent } from "./support-us-landing/support-us-landing.component";
import { FosterFormComponent } from "./components/foster-form/foster-form.component";

const routes: Routes = [
  { path: "", component: SupportUsLandingComponent },
  { path: "foster-form", component: FosterFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportUsRoutingModule {}
