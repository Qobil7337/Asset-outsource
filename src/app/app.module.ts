import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './section/main/main.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { ServicesComponent } from './sections/services/services.component';
import { OurTeamComponent } from './sections/our-team/our-team.component';
import { CompanyInNumbersComponent } from './sections/company-in-numbers/company-in-numbers.component';
import { CompanyExperienceComponent } from './sections/company-experience/company-experience.component';
import { OurClientsComponent } from './sections/our-clients/our-clients.component';
import { MapComponent } from './sections/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent,
    ServicesComponent,
    OurTeamComponent,
    CompanyInNumbersComponent,
    CompanyExperienceComponent,
    OurClientsComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
