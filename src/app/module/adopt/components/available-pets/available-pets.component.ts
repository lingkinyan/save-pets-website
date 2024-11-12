import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AvailablePets } from "../../../../common-components/class/available-pets.components";

@Component({
  selector: "app-available-pets",
  standalone: false,
  templateUrl: "./available-pets.component.html",
  styleUrl: "./available-pets.component.less",
})
export class AvailablePetsComponent {
  constructor(private router: Router, private title: Title) {
    this.title.setTitle("Pets | Pet Save");
  }

  selectedCategory: string[] = [];

  selectedIndex: number = 0;

  availablePets: any[] = [];

  copiedAvailablePets: any[] = [];

  adoptedPets: any[] = [];

  copiedAdoptedPets: any[] = [];

  isAdmin: boolean = false;

  ngOnInit(): void {
    this.copiedAvailablePets = AvailablePets.availablePets;
    this.copiedAdoptedPets = AvailablePets.adoptedPets;
    this.isAdmin = localStorage.getItem('token') ? true : false

    console.log()
  }

  selectedCategoryChange(category: string[]): void {
    if (category.length === 0) {
      this.copiedAvailablePets = AvailablePets.availablePets;
      this.copiedAdoptedPets = AvailablePets.adoptedPets;
    } else {
      // TODO: call APIs
      this.copiedAvailablePets = [];
      AvailablePets.availablePets.forEach((v) => {
        if (category.includes(v.category)) {
          this.copiedAvailablePets = [...this.copiedAvailablePets, v];
        }
      });

      this.copiedAdoptedPets = [];
      AvailablePets.adoptedPets.forEach((v) => {
        if (category.includes(v.category)) {
          this.copiedAdoptedPets = [...this.copiedAdoptedPets, v];
        }
      });
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
}
