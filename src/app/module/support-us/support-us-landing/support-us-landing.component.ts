import { Component } from "@angular/core";
import { IntersectionComponents } from "../../../common-components/class/intersection.component";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-support-us-landing",
  standalone: false,
  templateUrl: "./support-us-landing.component.html",
  styleUrl: "./support-us-landing.component.less",
})
export class SupportUsLandingComponent extends IntersectionComponents {
  constructor(private title: Title, private router: Router) {
    super();
    this.title.setTitle("Support Us | Pet Save");
  }

  click(action?: string): void {
    // TODO
    console.log("clicked");

    if (action === "foster") {
      this.router.navigate(["/support-us/foster-form"]);
    }
  }
}
