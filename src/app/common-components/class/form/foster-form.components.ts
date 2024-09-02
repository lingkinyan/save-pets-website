export class FosterForm {
    "fosterPetTypeId": number[];
    "firstName": string;
    "lastName": string;
    "age": number;
    "socialMediaAccount": string;
    "phoneNumber": string;
    "email": string;
    "address": string;
    "city": string;
    "postalCode": string;
    "householdType": string;
    "allowPets": boolean;
    "haveChildren": boolean;
    "haveFencedYard": boolean;
    "haveAllergy": boolean;
    "stayingPlace": string;
    "prohibitedPlace": string;
    "experience": string;
    "outOfTownPlan": string;
    "hoursAlone": number;
    "haveWhatsapp": boolean;
    "havePetBefore": boolean;
    "haveSurrenderedPetBefore": boolean;
    "havePetNow": boolean;
    "houseOwnershipId": number;
    "householdMemberInfo": HouseholdMemberInfoClass[];
    "childrenInfo": number[];
    "petsInfo": number[];
    "referenceInfo": ReferenceInfoClass[];
  }
  
  class ReferenceInfoClass {
    name: string;
    phoneNumber: string;
  }
  
  class HouseholdMemberInfoClass {
    name: string;
    occupation: string;
    age: number;
  }
  