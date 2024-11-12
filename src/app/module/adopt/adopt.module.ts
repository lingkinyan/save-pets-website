import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { AdoptRoutingModule } from "./adopt-routing.module";
import { CommonComponentModule } from "../../common-components/common-component.components";
import { AdoptLandingComponent } from "./adopt-landing/adopt-landing.component";
import { NzTimelineModule } from "ng-zorro-antd/timeline";
import { ProcedureComponent } from "./components/procedure/procedure.component";
import { AvailablePetsComponent } from "./components/available-pets/available-pets.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { PetCardsComponent } from "./components/pet-cards/pet-cards.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { PetInfoComponent } from "./components/pet-info/pet-info.component";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { TextAlignComponent } from "./components/text-align/text-align.component";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { AdoptionApplicationFormComponent } from "./components/adoption-application-form/adoption-application-form.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AdoptLandingComponent,
    ProcedureComponent,
    AvailablePetsComponent,
    AdoptionApplicationFormComponent,
    PetCardsComponent,
    PetInfoComponent,
    TextAlignComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdoptRoutingModule,
    CommonComponentModule,
    NzTimelineModule,
    NzSelectModule,
    FormsModule,
    NzTabsModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCarouselModule,
    NzDividerModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzSkeletonModule,
  ],
})
export class AdoptModule {}
