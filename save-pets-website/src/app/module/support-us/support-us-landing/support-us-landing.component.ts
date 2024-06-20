import { Component } from '@angular/core';
import { IntersectionComponents } from '../../../common-components/class/intersection.component';

@Component({
  selector: 'app-support-us-landing',
  standalone: false,
  templateUrl: './support-us-landing.component.html',
  styleUrl: './support-us-landing.component.less',
})
export class SupportUsLandingComponent extends IntersectionComponents {
  click(): void {
    // TODO
    console.log('clicked');
  }
}
