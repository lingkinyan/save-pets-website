import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IntersectionComponents } from "../../../../common-components/class/intersection.component";
import { DatePipe } from "@angular/common";
import { GetAge } from "../../../../common-components/class/get-age.components";
import { PetSex } from "../../../../common-components/class/pet-info.component";

@Component({
  selector: "app-pet-cards",
  standalone: false,
  templateUrl: "./pet-cards.component.html",
  styleUrl: "./pet-cards.component.less",
})
export class PetCardsComponent extends IntersectionComponents {
  @Input() name: string = "";
  @Input() dob: Date;
  @Input() sex: PetSex;
  @Input() imgSrc = "";
  @Input() showBtn: boolean = true;
  @Output() btnClicked: EventEmitter<any> = new EventEmitter<any>();

  age: any;

  ngOnInit(): void {
    this.age = GetAge.getAge(this.dob);
  }

  get sexType(): typeof PetSex {
    return PetSex;
  }
}
