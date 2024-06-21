import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdoptRoutingModule } from "./adopt-routing.module";
import { CommonComponentModule } from "../../common-components/common-component.components";
import { AdoptLandingComponent } from "./adopt-landing/adopt-landing.component";
import { NzTimelineModule } from "ng-zorro-antd/timeline";
import { ProcedureComponent } from "./components/procedure/procedure.component";
import { AvailablePetsComponent } from "./components/available-pets/available-pets.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule } from "@angular/forms";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { PetCardsComponent } from "./components/pet-cards/pet-cards.component";
import { NzButtonModule } from "ng-zorro-antd/button";

@NgModule({
  declarations: [
    AdoptLandingComponent,
    ProcedureComponent,
    AvailablePetsComponent,
    PetCardsComponent,
  ],
  imports: [
    CommonModule,
    AdoptRoutingModule,
    CommonComponentModule,
    NzTimelineModule,
    NzSelectModule,
    FormsModule,
    NzTabsModule,
    NzButtonModule
  ],
})
export class AdoptModule {}
