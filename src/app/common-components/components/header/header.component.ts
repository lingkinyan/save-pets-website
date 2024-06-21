import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NzDrawerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  visible = false;

  navSites = [
    { name: 'Home', path: '/home' },
    { name: 'Adopt', path: '/adopt' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Support Us', path: '/support-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  routeTo(site: string): void {
    if (site === 'ig') {
      window.open('https://www.instagram.com');
    } else {
      this.visible = false;
      this.router.navigate([site]);

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
    }
  }
}