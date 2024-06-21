import { Component } from '@angular/core';
import { IntersectionComponents } from '../../../common-components/class/intersection.component';

@Component({
  selector: 'app-about-us-landing',
  standalone: false,
  templateUrl: './about-us-landing.component.html',
  styleUrl: './about-us-landing.component.less',
})
export class AboutUsLandingComponent extends IntersectionComponents {
  memberList = [
    {
      imgSrc: 'about-us/wendy-min.png',
      name: 'Wendy Min',
      position: 'Co-Funder',
    },
    { imgSrc: 'home-page/circle-1.jpeg', name: 'Happy', position: 'Staff' },
    {
      imgSrc: 'home-page/circle-2.webp',
      name: 'Lucky',
      position: 'Star',
    },
    { imgSrc: 'home-page/circle-3.webp', name: 'HEHE', position: '^^' },
    { imgSrc: 'home-page/circle-4.jpeg', name: 'HAHA', position: '^^' },
  ];
}
