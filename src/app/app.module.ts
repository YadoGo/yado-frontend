import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '@core/states/user.state';
import { ModulesModule } from '@modules/modules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
