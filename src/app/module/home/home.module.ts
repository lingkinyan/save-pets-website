import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { CommonComponentModule } from '../../common-components/common-component.components';

@NgModule({
  declarations: [HomeLandingComponent, WelcomeBannerComponent, BubblesComponent],
  imports: [HomeRoutingModule, CommonModule, NzButtonModule, CommonComponentModule],
})
export class HomeModule {}
