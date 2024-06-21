import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptRoutingModule } from './adopt-routing.module';
import { CommonComponentModule } from '../../common-components/common-component.components';
import { AdoptLandingComponent } from './adopt-landing/adopt-landing.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@NgModule({
  declarations: [AdoptLandingComponent],
  imports: [
    CommonModule,
    AdoptRoutingModule,
    CommonComponentModule,
    NzTimelineModule
  ]
})
export class AdoptModule { }
