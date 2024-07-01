import { Component } from "@angular/core";
import { IntersectionComponents } from "../../../common-components/class/intersection.component";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-support-us-landing",
  standalone: false,
  templateUrl: "./support-us-landing.component.html",
  styleUrl: "./support-us-landing.component.less",
})
export class SupportUsLandingComponent extends IntersectionComponents {
  constructor(private title: Title) {
    super();
    this.title.setTitle("Support Us | Pet Save");
  }
  
  click(): void {
    // TODO
    console.log("clicked");
  }
}
