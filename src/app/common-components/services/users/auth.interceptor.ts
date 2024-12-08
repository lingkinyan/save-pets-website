import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("hi?");

    const token = localStorage.getItem("token"); // Get the token from localStorage

    console.log("token?", token);
    if (token) {
      // Clone the request to add the new header
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Forward the cloned request with the Authorization header
      return next.handle(clonedRequest);
    }

    // If no token, continue with the original request
    return next.handle(req);
  }
}
