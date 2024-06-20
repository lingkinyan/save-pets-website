import { Routes } from '@angular/router';
import { HomeLandingComponent } from './module/home/home-landing/home-landing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: "home",
    loadChildren: () =>
      import("./module/home/home.module").then(
        (m) => m.HomeModule
      ),
  },

  { path: '**', component: HomeLandingComponent },
];
