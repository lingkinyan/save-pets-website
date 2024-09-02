import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactUsForm } from "../class/form/contact-us-form.components";
import { VolunteerForm } from "../class/form/volunteer-form.components";
import { AdoptionForm } from "../class/form/adoption-form.components";
import { FosterForm } from "../class/form/foster-form.components";

const url = "https://api.petsaveorg.com/api/v1/forms";

@Injectable({
  providedIn: "root",
})
export class PostFormService {
  constructor(private http: HttpClient) {}

  postContactUs(form: ContactUsForm): Observable<any> {
    return this.http.post(`${url}/contact-us`, form);
  }

  postVolunteerForm(form: VolunteerForm): Observable<any> {
    return this.http.post(`${url}/volunteer-applications`, form);
  }

  postAdoptionOrFosterForm(form: AdoptionForm | FosterForm): Observable<any> {
    return this.http.post(`${url}/pets-applications`, form);
  }

}
