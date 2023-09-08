import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';
import { LoginPageComponent, RegisterPageComponent } from '@modules/auth/pages';
import { AboutPageComponent } from '@modules/main/about';
import { ComparePageComponent } from '@modules/main/compare';
import { DetailsHotelsPageComponent } from '@modules/main/details-hotels';
import { HomePageComponent } from '@modules/main/home/pages';
import { ListHotelsPageComponent } from '@modules/main/list-hotels';
import { ProfileSettingsPageComponent } from '@modules/main/profile-settings';
import { TopHotelsPageComponent } from '@modules/main/top-hotels';
import { MapHotelsComponent } from '@modules/main/list-hotels/components/map-hotels/map-hotels.component';
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
  { title: 'Top · YADO', path: 'top', component: TopHotelsPageComponent },
  {
    title: 'Settings · YADO',
    path: 'user/:username/settings',
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
  { path: 'map', component: MapHotelsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
