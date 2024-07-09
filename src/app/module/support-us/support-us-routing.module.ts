import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupportUsLandingComponent } from "./support-us-landing/support-us-landing.component";
import { FosterFormComponent } from "./components/foster-form/foster-form.component";
import { VolunteerFormComponent } from "./components/volunteer-form/volunteer-form.component";

const routes: Routes = [
  { path: "", component: SupportUsLandingComponent },
  { path: "foster-form", component: FosterFormComponent },
  { path: "volunteer-form", component: VolunteerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportUsRoutingModule {}
