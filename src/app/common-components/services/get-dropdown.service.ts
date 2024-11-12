import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const url = "https://api.petsaveorg.com/api/v1/settings";

@Injectable({
  providedIn: "root",
})
export class GetDropdownService {
  constructor(private http: HttpClient) {}

  getHouseHoldType(): Observable<any> {
    return this.http.get(`${url}/household-types`);
  }

  getTimeOfDay(): Observable<any> {
    return this.http.get(`${url}/time-of-a-day`);
  }

  getDayOfWeek(): Observable<any> {
    return this.http.get(`${url}/day-of-a-week`);
  }

  getHouseOwnershipType(): Observable<any> {
    return this.http.get(`${url}/house-ownership-types`);
  }

  getPetTypeCategory(): Observable<any> {
    return this.http.get(`https://api.petsaveorg.com/api/v1/pets/categories`);
  }

  getGender(): Observable<any> {
    return this.http.get(`${url}/genders`);
  }
}
