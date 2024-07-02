import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { GetAge } from "../../../../common-components/class/get-age.components";

@Component({
  selector: "app-pet-info",
  standalone: false,
  templateUrl: "./pet-info.component.html",
  styleUrl: "./pet-info.component.less",
})
export class PetInfoComponent {
  constructor(private router: Router, private titleService: Title) {}
  petInfo: any = {
    id: 1,
    name: "Happy",
    sex: "F",
    dob: "2022-12-31",
    breed: "New Breed",
    weight: "4.1",
    imageList: [
      "home-page/circle-1.jpeg",
      "home-page/circle-2.webp",
      "home-page/circle-3.webp",
      "home-page/circle-4.jpeg",
    ],
    healthStatus: "Very good",
    color: "White",
    personality: "Nice",
    idealFamily: "Nice",
    rescueProcess: "Hello",
  };

  petAge = "";

  ngOnInit(): void {
    // TODO: get pet info by APIs
    this.titleService.setTitle(this.petInfo.name + " | Pet Save");

    this.petAge = GetAge.getAge(this.petInfo.dob);
  }

  routeToPage(page: string): void {
    if (page === "pets") {
      this.router.navigate(["/adopt/available-pets"]);
    }

    if (page === "application-form") {
      window.open("https://forms.gle/nuKTmB3ZbrsLAqJx9")
    }

    if (page === "donate") {
      // TODO
    }
  }
}
