import { Component, Input } from "@angular/core";
import { IntersectionComponents } from "../../../../common-components/class/intersection.component";

@Component({
  selector: "app-pet-cards",
  standalone: false,
  templateUrl: "./pet-cards.component.html",
  styleUrl: "./pet-cards.component.less",
})
export class PetCardsComponent extends IntersectionComponents{
  @Input() name: string = "";
  @Input() dob: string = '';
  @Input() sex: string = "";
  @Input() imgSrc = "";
  @Input() showBtn: boolean = true
}
