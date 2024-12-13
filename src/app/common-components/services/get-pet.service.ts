import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const url = "https://api.petsaveorg.com/api/v1/pets";
@Injectable({
  providedIn: "root",
})
export class GetPetsService {
  constructor(private http: HttpClient) {}

  getAllPet(): Observable<any> {
    return this.http.get(`${url}/`);
  }

  getPetInfoById(id: number): Observable<any> {
    return this.http.get(`${url}/${id}`);
  }
}
