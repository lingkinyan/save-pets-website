import { Component, Input } from "@angular/core";

@Component({
  selector: "text-align",
  standalone: false,
  templateUrl: "./text-align.component.html",
  styleUrl: "./text-align.component.less",
})
export class TextAlignComponent {
  @Input() title: string;
  @Input() content: string;
}
