import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { LeftRightCardComponent } from '../../common-components/components/left-right-card/left-right-card.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { IntersectionDirective } from '../../common-components/directives/intersection.directive';
import { WhiteCardComponent } from '../../common-components/components/white-card/white-card.component';

@NgModule({
  declarations: [HomeLandingComponent, WelcomeBannerComponent, BubblesComponent, IntersectionDirective],
  imports: [HomeRoutingModule, CommonModule, NzButtonModule, LeftRightCardComponent, WhiteCardComponent],
})
export class HomeModule {}
