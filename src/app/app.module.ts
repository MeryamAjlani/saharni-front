import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TeamComponent } from './Components/team/team.component';
import { PartiesComponent } from './Components/parties/parties.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    FooterComponent,
    TeamComponent,
    PartiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
