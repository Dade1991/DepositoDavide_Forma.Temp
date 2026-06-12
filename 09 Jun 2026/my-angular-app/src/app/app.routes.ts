import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home-component/home-component';
import { AboutComponent } from './features/pages/about-component/about-component';
import { NotFoundPageComponent } from './features/pages/not-found-page-component/not-found-page-component';
import { UserProfileComponent } from './features/pages/user-profile-component/user-profile-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundPageComponent },
  { path: 'user/:id', component: UserProfileComponent },
];
