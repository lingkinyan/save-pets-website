import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsLandingComponent } from './contact-us-landing/contact-us-landing.component';
import { CommonComponentModule } from '../../common-components/common-component.components';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [ContactUsLandingComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    CommonComponentModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
})
export class ContactUsModule {}
