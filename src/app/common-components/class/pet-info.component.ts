export class PetInfo {
  id: number;
  name: string;
  sex: PetSex;
  dob: any;
  category: PetCategory;
  breed: string;
  weight: number;
  imageList: string[];
  color: string;
  healthStatus: string;
  personality: string;
  houseTrained: boolean;
  idealFamily: string;
  characteristics: string;
  description: string;
}

export enum PetCategory {
  CAT = "CAT",
  DOG = "DOG",
}

export enum PetSex {
  M = "Male",
  F = "Female",
}
