import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, RegisterPageComponent } from '@modules/auth/pages';
import { AboutPageComponent } from '@modules/main/about';
import { HomePageComponent } from '@modules/main/home/pages';

const routes: Routes = [
  { title: 'Log in | YADO', path: 'auth/login', component: LoginPageComponent },
  { title: 'Sign up | YADO', path: 'auth/register', component: RegisterPageComponent },
  { path: 'login', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'register', redirectTo: 'auth/register', pathMatch: 'full' },
  { title: 'About | YADO', path: 'about', component: AboutPageComponent },

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
