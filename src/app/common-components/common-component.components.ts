import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from './directives/intersection.directive';
import { WhiteCardComponent } from './components/white-card/white-card.component';
import { LeftRightCardComponent } from './components/left-right-card/left-right-card.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    IntersectionDirective,
    WhiteCardComponent,
    LeftRightCardComponent
    // Other components, directives, pipes...
  ],
  imports: [
    CommonModule,
    NzButtonModule
    // Other imported modules...
  ],
  exports: [
    IntersectionDirective,
    WhiteCardComponent,
    LeftRightCardComponent
    // Other exported components, directives, pipes...
  ],
})
export class CommonComponentModule {}
