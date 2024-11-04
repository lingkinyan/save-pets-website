import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginInfo } from "../../class/user.components";

const url = "https://api.petsaveorg.com/api/v1/users";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(loginInfo: LoginInfo): Observable<any> {
    return this.http.post(`${url}/`, loginInfo);
  }

}
