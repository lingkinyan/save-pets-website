import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { en_US, provideNzI18n } from "ng-zorro-antd/i18n";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";
import { AuthInterceptor } from "./app/common-components/services/users/auth.interceptor";
import { FormsModule } from "@angular/forms";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // Your custom interceptor
      multi: true, // Ensures that multiple interceptors can be used
    },
  ],
}).catch((err) => console.error(err));
