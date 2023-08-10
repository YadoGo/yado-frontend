import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, RegisterPageComponent } from '@modules/auth/pages';
import { AboutPageComponent } from '@modules/main/about';
import { ComparePageComponent } from '@modules/main/compare';
import { HomePageComponent } from '@modules/main/home/pages';
import { ListHotelsPageComponent } from '@modules/main/list-hotels';
import { TopHotelsPageComponent } from '@modules/main/top-hotels';

const routes: Routes = [
  { title: 'Log in · YADO', path: 'auth/login', component: LoginPageComponent },
  { title: 'Sign up · YADO', path: 'auth/register', component: RegisterPageComponent },
  { path: 'login', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'register', redirectTo: 'auth/register', pathMatch: 'full' },
  { title: 'About · YADO', path: 'about', component: AboutPageComponent },
  { title: 'Compare · YADO', path: 'compare', component: ComparePageComponent },
  { title: 'Top · YADO', path: 'top', component: TopHotelsPageComponent },
  { title: 'Hotels · YADO', path: 'hotels', component: ListHotelsPageComponent }, // Temp
  {
    title: 'YADO',
    path: '',
    component: HomePageComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
