import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-available-pets",
  standalone: false,
  templateUrl: "./available-pets.component.html",
  styleUrl: "./available-pets.component.less",
})
export class AvailablePetsComponent {
  constructor(private router: Router, private title: Title) {
    this.title.setTitle("Pets | Pets Save");
  }

  selectedCategory: string[] = [];

  selectedIndex: number = 0;

  //TODO
  availablePets = [
    {
      name: "Happy",
      dob: "2022-12-31",
      sex: "F",
      imgSrc: "home-page/circle-1.jpeg",
      category: "cat",
      id: 1,
    },
    {
      name: "Lucy",
      dob: "2024-02-10",
      sex: "M",
      imgSrc: "home-page/circle-2.webp",
      category: "cat",
      id: 2,
    },
    {
      name: "Jack",
      dob: "2022-12-31",
      sex: "M",
      imgSrc: "home-page/circle-3.webp",
      category: "cat",
      id: 3,
    },
    {
      name: "QQ",
      dob: "2022-12-31",
      sex: "F",
      imgSrc: "home-page/circle-4.jpeg",
      category: "dog",
      id: 4,
    },
    {
      name: "Mimi",
      dob: "2022-12-31",
      sex: "M",
      imgSrc: "home-page/circle-1.jpeg",
      category: "dog",
      id: 5,
    },
    {
      name: "Yoko",
      dob: "2022-12-31",
      sex: "F",
      imgSrc: "home-page/circle-1.jpeg",
      category: "dog",
      id: 6,
    },
    {
      name: "Handsome",
      dob: "2022-12-31",
      sex: "M",
      imgSrc: "home-page/circle-1.jpeg",
      category: "small-pet",
      id: 7,
    },
  ];

  copiedAvailablePets: any[] = [];

  adoptedPets = [
    {
      name: "Nice",
      dob: "2022-12-31",
      sex: "F",
      imgSrc: "home-page/circle-1.jpeg",
      category: "cat",
    },
    {
      name: "Testing",
      dob: "2022-12-31",
      sex: "M",
      imgSrc: "home-page/circle-2.webp",
      category: "dog",
    },
  ];

  copiedAdoptedPets: any[] = [];

  ngOnInit(): void {
    this.copiedAvailablePets = this.availablePets;
    this.copiedAdoptedPets = this.adoptedPets;
  }

  selectedCategoryChange(category: string[]): void {
    if (category.length === 0) {
      this.copiedAvailablePets = this.availablePets;
      this.copiedAdoptedPets = this.adoptedPets;
    } else {
      // TODO: call APIs
      this.copiedAvailablePets = [];
      this.availablePets.forEach((v) => {
        if (category.includes(v.category)) {
          this.copiedAvailablePets = [...this.copiedAvailablePets, v];
        }
      });

      this.copiedAdoptedPets = [];
      this.adoptedPets.forEach((v) => {
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
}
