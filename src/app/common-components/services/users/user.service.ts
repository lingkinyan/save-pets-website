import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginInfo } from "../../class/user.components";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

const url = "https://api.petsaveorg.com/api/v1/users";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(loginInfo: LoginInfo): Observable<HttpResponse<string>> {
    const apiUrl = `${url}?email=${loginInfo.email}&password=${loginInfo.password}`;

    return this.http
      .get(apiUrl, { responseType: "text", observe: "response" }) // No need to specify <string> here
      .pipe(
        catchError((error) => {
          console.error("Login request failed", error);
          return of(error); // Return the error as an observable
        })
      );
  }
}
