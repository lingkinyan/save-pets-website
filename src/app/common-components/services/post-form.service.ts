import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactUsForm } from "../class/contact-us-form.components";
import { VolunteerForm } from "../class/volunteer-form.components";

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
}
