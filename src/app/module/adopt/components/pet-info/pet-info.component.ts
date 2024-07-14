import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { GetAge } from "../../../../common-components/class/get-age.components";
import { AvailablePets } from "../../../../common-components/class/available-pets.components";

@Component({
  selector: "app-pet-info",
  standalone: false,
  templateUrl: "./pet-info.component.html",
  styleUrl: "./pet-info.component.less",
})
export class PetInfoComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {}

  petInfo: any;

  petId: string;

  petAge = "";

  isLoaded: boolean = false

  ngOnInit(): void {
    this.petId = this.activatedRoute.snapshot.paramMap.get("id") ?? "";

    if (this.petId) {
      this.petInfo = AvailablePets.availablePets.filter(
        (v) => v.id === +this.petId
      )[0];


      // TODO: get pet info by APIs
      this.titleService.setTitle(this.petInfo.name + " | Pet Save");

      this.petAge = GetAge.getAge(this.petInfo.dob);

      this.isLoaded = true;
    }
  }

  routeToPage(page: string): void {
    if (page === "pets") {
      this.router.navigate(["/adopt/available-pets"]);
    }

    if (page === "application-form") {
      this.router.navigate(["/adopt/application-form"]);
    }

    if (page === "donate") {
      // TODO
    }
  }
}
