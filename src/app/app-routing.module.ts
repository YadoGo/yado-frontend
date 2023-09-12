import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';
import { LoginPageComponent, RegisterPageComponent } from '@modules/auth/pages';
import { AboutPageComponent } from '@modules/main/about';
import { ComparePageComponent } from '@modules/main/compare';
import { ChampionsPageComponent } from '@modules/main/champions';
import { DetailsHotelsPageComponent } from '@modules/main/details-hotels';
import { HomePageComponent } from '@modules/main/home/pages';
import { HotelManagerPageComponent } from '@modules/main/hotel-manager';
import { ListHotelsPageComponent } from '@modules/main/list-hotels';
import { ProfileSettingsPageComponent } from '@modules/main/profile-settings';
import { UserProfileComponent } from '@modules/main/user-profile';

const routes: Routes = [
  {
    title: 'YADO',
    path: '',
    component: HomePageComponent,
  },
  {
    title: 'Log in · YADO',
    path: 'auth/login',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
  },
  {
    title: 'Sign up · YADO',
    path: 'auth/register',
    component: RegisterPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'register', redirectTo: 'auth/register', pathMatch: 'full' },
  { title: 'About · YADO', path: 'about', component: AboutPageComponent },
  { title: 'Compare · YADO', path: 'compare', component: ComparePageComponent },
  {
    title: 'Champions · YADO',
    path: 'champions',
    component: ChampionsPageComponent,
  },
  {
    title: 'Profile · YADO',
    path: 'user/:username',
    component: UserProfileComponent,
  },
  {
    title: 'Settings · YADO',
    path: 'settings/profile',
    component: ProfileSettingsPageComponent,
  },
  {
    title: 'Hotels · YADO',
    path: 'hotels/:city',
    component: ListHotelsPageComponent,
  },
  {
    title: 'Name Hotel · YADO',
    path: 'hotels/:city/:name-hotel',
    component: DetailsHotelsPageComponent,
  },
  {
    title: 'Dashboard · YADO',
    path: 'owner',
    component: HotelManagerPageComponent,
  },
  {
    title: 'Hotels · YADO',
    path: 'owner/hotels',
    component: HotelManagerPageComponent,
  },
  {
    title: 'Reviews · YADO',
    path: 'owner/reviews',
    component: HotelManagerPageComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
