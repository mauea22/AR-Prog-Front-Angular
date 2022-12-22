import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LogoApComponent } from './shared/logo-ap/logo-ap.component';
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { BannerComponent } from './shared/banner/banner.component';
import { AcercaDeComponent } from './shared/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    SocialMediaComponent,
    BannerComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
