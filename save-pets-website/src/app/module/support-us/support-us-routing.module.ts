import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportUsLandingComponent } from './support-us-landing/support-us-landing.component';

const routes: Routes = [{ path: '', component: SupportUsLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportUsRoutingModule {}
