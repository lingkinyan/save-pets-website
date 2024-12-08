import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IntersectionDirective } from "./directives/intersection.directive";
import { WhiteCardComponent } from "./components/white-card/white-card.component";
import { LeftRightCardComponent } from "./components/left-right-card/left-right-card.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    IntersectionDirective,
    WhiteCardComponent,
    LeftRightCardComponent,

    // Other components, directives, pipes...
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzSkeletonModule,
    HttpClientModule,

    // Other imported modules...
  ],
  exports: [
    IntersectionDirective,
    WhiteCardComponent,
    LeftRightCardComponent,
    // Other exported components, directives, pipes...
  ],
})
export class CommonComponentModule {}
