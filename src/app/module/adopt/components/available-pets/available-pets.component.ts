import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { GetPetsService } from "../../../../common-components/services/get-pet.service";
import { PetSex } from "../../../../common-components/class/pet-info.component";

@Component({
  selector: "app-available-pets",
  standalone: false,
  templateUrl: "./available-pets.component.html",
  styleUrl: "./available-pets.component.less",
})
export class AvailablePetsComponent {
  constructor(
    private router: Router,
    private title: Title,
    private getPetService: GetPetsService
  ) {
    this.title.setTitle("Pets | Pet Save");
  }

  selectedCategory: string[] = [];

  selectedIndex: number = 0;

  allPetsList: any[] = [];

  availablePets: any[] = [];

  adoptedPets: any[] = [];

  isAdmin: boolean = false;

  isLoaded: boolean = true;

  ngOnInit(): void {
    this.getPetService.getAllPet().subscribe((list) => {
      this.allPetsList = list;
      this.availablePets = list.filter((v: any) => !v.isAdopted);
      this.adoptedPets = list.filter((v: any) => v.isAdopted);
      this.isLoaded = false;
    });

    
    this.isAdmin = localStorage.getItem("token") ? true : false;
  }

  resetPetList(): void {
    this.availablePets = this.allPetsList.filter((v: any) => !v.isAdopted);
    this.adoptedPets = this.allPetsList.filter((v: any) => v.isAdopted);
  }

  selectedCategoryChange(category: number[]): void {
    if (category.length === 0) {
      this.resetPetList();
    } else {
      this.availablePets = this.allPetsList.filter(
        (v) => category.includes(+v.petCategory) && !v.isAdopted
      );

      this.adoptedPets = this.allPetsList.filter(
        (v) => category.includes(v.petCategory) && v.isAdopted
      );
    }
  }

  nzSelectChange(type: any): void {
    this.selectedIndex = type.index;
  }

  goToDetailsPage(id: number): void {
    this.router.navigate(["/adopt/pet-info/" + id]);
  }

  addPet(): void {
    this.router.navigate(["/admin/add-pet"]);
  }

  getPetGender(gender: number): PetSex {
    return gender === 1 ? PetSex.M : PetSex.F;
  }
}
