import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptLandingComponent } from './adopt-landing/adopt-landing.component';

const routes: Routes = [{ path: '', component: AdoptLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptRoutingModule {}
