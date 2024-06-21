import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, NzDrawerModule, NzDropDownModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.less",
})
export class HeaderComponent {
  constructor(private router: Router) {}

  visible = false;

  navSites = [
    { name: "Home", path: "/home" },
    {
      name: "Adopt",
      path: "/adopt",
      isExpand: false,
      children: [
        { name: "Adopt Procedure", path: "/adopt/adopt-procedure" },
        { name: "Application Form", path: "/adopt//application-form" },
        { name: "Available Pets", path: "/adopt/available-pets" },
      ],
    },
    { name: "About Us", path: "/about-us" },
    { name: "Support Us", path: "/support-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  routeTo(site: string): void {
    if (site === "ig") {
      window.open("https://www.instagram.com");
    } else {
      this.visible = false;

      this.navSites.forEach((v) => {
        if (v.isExpand) {
          v.isExpand = false;
        }
      });

      this.router.navigate([site]);

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
    }
  }

  expandMenu(type: string): void {
    const index = this.navSites.findIndex((v) => v.name === type);
    this.navSites[index].isExpand = !this.navSites[index].isExpand;
  }
}
