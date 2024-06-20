import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportUsRoutingModule } from './support-us-routing.module';
import { SupportUsLandingComponent } from './support-us-landing/support-us-landing.component';
import { CommonComponentModule } from '../../common-components/common-component.components';


@NgModule({
  declarations: [SupportUsLandingComponent],
  imports: [
    CommonModule,
    SupportUsRoutingModule,
    CommonComponentModule
  ]
})
export class SupportUsModule { }
