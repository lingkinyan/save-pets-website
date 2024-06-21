import { Component } from "@angular/core";

@Component({
  selector: "app-available-pets",
  standalone: false,
  templateUrl: "./available-pets.component.html",
  styleUrl: "./available-pets.component.less",
})
export class AvailablePetsComponent {
  selectedCategory: string[] = [];

  selectedIndex: number = 0;

  //TODO
  availablePets = [
    {
      name: "Happy",
      dob: "31/12/2023",
      sex: "F",
      imgSrc: "home-page/circle-1.jpeg",
      category: "cat",
    },
    {
      name: "Lucy",
      dob: "31/12/2023",
      sex: "M",
      imgSrc: "home-page/circle-2.webp",
      category: "cat",
    },
    {
      name: "Jack",
      dob: "31/12/2023",
      sex: "M",
      imgSrc: "home-page/circle-3.webp",
      category: "cat",
    },
    {
      name: "QQ",
      dob: "31/12/2023",
      sex: "F",
      imgSrc: "home-page/circle-4.jpeg",
      category: "dog",
    },
    {
      name: "Mimi",
      dob: "31/12/2023",
      sex: "M",
      imgSrc: "home-page/circle-1.jpeg",
      category: "dog",
    },
    {
      name: "Yoko",
      dob: "31/12/2023",
      sex: "F",
      imgSrc: "home-page/circle-1.jpeg",
      category: "dog",
    },
    {
      name: "Handsome",
      dob: "31/12/2023",
      sex: "M",
      imgSrc: "home-page/circle-1.jpeg",
      category: "small-pet",
    },
  ];

  copiedAvailablePets: any[] = [];

  adoptedPets = [
    {
      name: "Nice",
      dob: "31/12/2023",
      sex: "F",
      imgSrc: "home-page/circle-1.jpeg",
      category: "cat",
    },
    {
      name: "Testing",
      dob: "31/12/2023",
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
}
