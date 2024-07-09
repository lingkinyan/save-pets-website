import { Routes } from '@angular/router';
import { HomeLandingComponent } from './module/home/home-landing/home-landing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./module/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'adopt',
    loadChildren: () =>
      import('./module/adopt/adopt.module').then((m) => m.AdoptModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./module/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'support-us',
    loadChildren: () =>
      import('./module/support-us/support-us.module').then(
        (m) => m.SupportUsModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./module/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },

  { path: '**', component: HomeLandingComponent },
  
];
