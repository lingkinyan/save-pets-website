import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsLandingComponent } from './about-us-landing/about-us-landing.component';
import { CommonComponentModule } from '../../common-components/common-component.components';
import { TeamPhotoFrameComponent } from './components/team-photo-frame/team-photo-frame.component';

@NgModule({
  declarations: [AboutUsLandingComponent, TeamPhotoFrameComponent],
  imports: [CommonModule, AboutUsRoutingModule, CommonComponentModule],
})
export class AboutUsModule {}
