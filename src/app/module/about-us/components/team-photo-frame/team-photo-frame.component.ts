import { Component, Input } from "@angular/core";
import { IntersectionComponents } from "../../../../common-components/class/intersection.component";

@Component({
  selector: "app-team-photo-frame",
  standalone: false,
  templateUrl: "./team-photo-frame.component.html",
  styleUrl: "./team-photo-frame.component.less",
})
export class TeamPhotoFrameComponent extends IntersectionComponents {
  @Input() imgSrc = "";
  @Input() name = "";
  @Input() position = "";
  @Input() des = "";

  className = "";
  ngOnInit(): void {
    this.className = this.name.replace(" ", "-");
  }
}
