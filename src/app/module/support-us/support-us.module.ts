import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupportUsRoutingModule } from "./support-us-routing.module";
import { SupportUsLandingComponent } from "./support-us-landing/support-us-landing.component";
import { CommonComponentModule } from "../../common-components/common-component.components";
import { FosterFormComponent } from "./components/foster-form/foster-form.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzButtonModule } from "ng-zorro-antd/button";

@NgModule({
  declarations: [SupportUsLandingComponent, FosterFormComponent],
  imports: [
    CommonModule,
    SupportUsRoutingModule,
    CommonComponentModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzDividerModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
  ],
})
export class SupportUsModule {}
