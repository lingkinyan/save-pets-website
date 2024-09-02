import { PetCategory, PetInfo, PetSex } from "./pet-info.component";

export class AvailablePets {
  static availablePets: PetInfo[] = [
    {
      id: 3,
      name: "Toto",
      sex: PetSex.M,
      dob: "2023-07-08",
      category: PetCategory.DOG,
      breed: "",
      weight: 22,
      imageList: [
        "pets/toto/toto1-min.jpeg",
        "pets/toto/toto2-min.jpeg",
        "pets/toto/toto3-min.jpeg",
        "pets/toto/toto4-min.jpeg",
      ],
      color: "Grey",
      healthStatus: "",
      personality: "",
      houseTrained: true,
      idealFamily: "",
      characteristics: "",
      description:
        "A Loving and Adorable Companion Toto is a charming and affectionate one-year-old pup weighing approximately 22 pounds. <br>He has received all necessary vaccinations, and has been neutered and microchipped. <br>This sweet pup is a delight to be around, boasting a gentle nature that makes him an excellent companion.<br>He is particularly fond of socializing with other dogs and cats, making him an excellent addition to a multi-pet household. <br>Moreover, Toto is potty-trained, making it easy to care for him. <br>Overall, Toto is a loving and loyal companion who would thrive in a loving home with an active family. <br>If you're looking for a friendly and well-mannered pup to join your family, Toto is definitely worth considering.",
    },

    {
      id: 4,
      name: "Pluto",
      sex: PetSex.M,
      dob: "2022-07-08",
      category: PetCategory.DOG,
      breed: "Mixed Breed",
      weight: 27.5,
      imageList: ["pets/pluto/pluto1-min.jpeg", "pets/pluto/pluto2-min.jpg"],
      color: "Black, White",
      healthStatus: "",
      personality: "",
      houseTrained: true,
      idealFamily: "",
      characteristics:
        "Friendly, Affectionate, Loyal, Gentle, Playful, Smart, Curious, Funny, Quiet",
      description:
        "A charming 2-year-old pup weighing 27.5 pounds. <br>He is currently on all vaccinations, neutered, and microchipped. <br>Pluto is a social butterfly who adores people and is gentle with other dogs, making him a wonderful addition to any family.",
    },
    {
      id: 5,
      name: "Bell",
      sex: PetSex.M,
      dob: "2019-07-04",
      category: PetCategory.DOG,
      breed: "Golden Retriever",
      weight: 75,
      imageList: [
        "pets/bell/bell1-min.jpeg",
        "pets/bell/bell2-min.jpeg",
        "pets/bell/bell3-min.jpeg",
        "pets/bell/bell4-min.jpeg",
      ],
      color: "Golden",
      healthStatus: "",
      personality: "",
      houseTrained: true,
      idealFamily: "",
      characteristics:
        "Affectionate, Brave, Couch, Curious, Gentle, Loves, Loyal, Playful, Quiet, Smart",
      description:
        "A charming 5-year-old neutered male weighing around 75 pounds. <br>This loving and gentle soul is looking for someone to love him for who he is. <br>As a friendly and loyal companion, Bell will be by your side through thick and thin. <br>He's an intelligent, well-behaved, and obedient boy, making him a joy. <br>Bell gets along well with other dogs and would be a fantastic addition to your pack. <br>If you're seeking a mellow, sweet, and loyal companion, look no further than Bell! <br>With his affectionate nature, he's sure to steal your heart and become your best friend.",
    },
    {
      id: 6,
      name: "Lisa",
      sex: PetSex.F,
      dob: "2021-06-29",
      category: PetCategory.DOG,
      breed: "Husky",
      weight: 51,
      imageList: [
        "pets/lisa/lisa1-min.jpeg",
        "pets/lisa/lisa2-min.jpeg",
        "pets/lisa/lisa3-min.jpeg",
      ],
      color: "Black, White",
      healthStatus: "",
      personality: "",
      houseTrained: true,
      idealFamily: "",
      characteristics:
        "Friendly, Affectionate, Loyal, Gentle, Playful, Smart, Brave, Curious, Independent, Funny, Athletic, Quiet, Loves Kisses, Loves Kids",
      description:
        "A stunning 3-year-old husky girl weighing 23 kg. She is up-to-date on all vaccinations, spayed, and microchipped. <br>Lisa loves children and is gentle with other dogs, making her a great addition to many families. <br>When she's not playing, she's happy to accompany children who are reading or watching TV, and she even enjoys a relaxing bath.",
    },
  ];

  static adoptedPets = [
    {
      id: 7,
      name: "Suki",
      sex: PetSex.F,
      dob: "2024-05-08",
      category: PetCategory.CAT,
      breed: "Domestic Short Hair",
      weight: 0,
      imageList: [
        "pets/suki/suki1-min.jpeg",
        "pets/suki/suki2-min.jpeg",
        "pets/suki/suki3-min.jpeg",
        "pets/suki/suki4-min.jpeg",
        "pets/suki/suki5-min.jpeg",
        "pets/suki/suki6-min.jpeg",
        "pets/suki/suki7-min.jpeg",
        "pets/suki/suki8-min.jpeg",
      ],
      color: "Grey",
      healthStatus: "",
      personality: "",
      houseTrained: true,
      idealFamily: "",
      characteristics:
        "Friendly, Affectionate, Loyal, Gentle, Playful, Smart, Curious, Loves Kisses",
      description:
        "She's already had her first vaccination and is making significant progress. <br>Suki is a friendly and outgoing cat who gets along well with people and other cats. <br>She's also very curious and has already learned to use the litter box.",
    },
  ];
}
