import { FormArray, FormGroup } from "@angular/forms";

export class FormUpdate {
  static updateTreeValidity(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.controls[key];

      if (
        abstractControl instanceof FormGroup ||
        abstractControl instanceof FormArray
      ) {
        this.updateTreeValidity(abstractControl);
      } else {
        abstractControl.markAsDirty();
        abstractControl.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  static clearValidators(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.controls[key];

      if (
        abstractControl instanceof FormGroup ||
        abstractControl instanceof FormArray
      ) {
        this.clearValidators(abstractControl);
      } else {
        abstractControl.clearValidators();
      }
    });
  }
}
