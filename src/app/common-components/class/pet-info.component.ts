export class PetInfo {
  id: number;
  name: string;
  gender: number;
  dateOfBirth: any;
  category: PetCategory;
  breed: string;
  weight: number;
  images: string[];
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
