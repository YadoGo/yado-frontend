import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '@core/states/user.state';
import { ModulesModule } from '@modules/modules.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
