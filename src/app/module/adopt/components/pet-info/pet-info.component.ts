import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { GetAge } from "../../../../common-components/class/get-age.components";
import {
  PetInfo,
  PetSex,
} from "../../../../common-components/class/pet-info.component";
import { GetPetsService } from "../../../../common-components/services/get-pet.service";

@Component({
  selector: "app-pet-info",
  standalone: false,
  templateUrl: "./pet-info.component.html",
  styleUrl: "./pet-info.component.less",
})
export class PetInfoComponent {
  PetSex: any;
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private getPetsService: GetPetsService
  ) {}

  petInfo: PetInfo;

  petId: string;

  petAge = "";

  isLoaded: boolean = false;

  ngOnInit(): void {
    this.petId = this.activatedRoute.snapshot.paramMap.get("id") ?? "";

    if (this.petId) {
      this.getPetsService.getPetInfoById(+this.petId).subscribe((info) => {
        this.petInfo = info;

        this.isLoaded = true;

        this.petAge = GetAge.getAge(this.petInfo.dateOfBirth);

        this.titleService.setTitle(this.petInfo.name + " | Pet Save");
      });

      // TODO: get pet info by APIs

      this.isLoaded = true;
    }
  }

  getPetGender(gender: number): PetSex {
    return gender === 1 ? PetSex.M : PetSex.F;
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
