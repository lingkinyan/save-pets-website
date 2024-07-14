export class GetAge {
  static findTimestamp(dob: Date): number {
    return new Date(dob).getTime();
  }

  static getAge(dob: Date): string {
    const birthDate: Date = new Date(GetAge.findTimestamp(dob));
    const currentDate: Date = new Date();

    let ageYears: number = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths: number = currentDate.getMonth() - birthDate.getMonth();

    if (currentDate.getDate() < birthDate.getDate()) {
      ageMonths--;
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageYears > 0 && ageMonths > 0) {
      return (
        ageYears +
        `${ageYears > 1 ? " years" : " year"}` +
        " & " +
        ageMonths +
        `${ageMonths > 1 ? " months" : " month"}`
      );
    } else if (ageYears > 0 && ageMonths === 0) {
      return ageYears + `${ageYears > 1 ? " years" : " year"}`;
    } else {
      return ageMonths + `${ageMonths > 1 ? " months" : " month"}`;
    }
  }
}
