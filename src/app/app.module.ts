import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from '../myModules/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderLambaadComponent } from './header-lambaad/header-lambaad.component';
import { FooterLambaadComponent } from './footer-lambaad/footer-lambaad.component';
import { LambaadRestaurantMenuComponent } from './lambaad-restaurant-menu/lambaad-restaurant-menu.component';
import { LambaadMenuOptionsComponent } from './lambaad-menu-options/lambaad-menu-options.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLambaadComponent,
    FooterLambaadComponent,
    LambaadRestaurantMenuComponent,
    LambaadMenuOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
