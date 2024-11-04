import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommonComponentModule } from '../../common-components/common-component.components';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [AdminLandingComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonComponentModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzDividerModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzCheckboxModule,
    NzBreadCrumbModule,
    NzSkeletonModule
  ]
})
export class AdminModule { }
