import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsLandingComponent } from './contact-us-landing/contact-us-landing.component';

const routes: Routes = [
  {path: '', component: ContactUsLandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
