import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "white-card",
  standalone: false,
  templateUrl: "./white-card.component.html",
  styleUrl: "./white-card.component.less",
})
export class WhiteCardComponent {
  @Input() isHover: boolean = false;
}
