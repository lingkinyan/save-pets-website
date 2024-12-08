import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { en_US, provideNzI18n } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule } from "@angular/forms";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";
import { AuthInterceptor } from "./common-components/services/users/auth.interceptor";

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
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
};
