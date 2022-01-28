import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TeamComponent } from './Components/team/team.component';
import { PartiesComponent } from './Components/parties/parties.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './Components/clients/clients.component';
import { CounterDirective } from './Shared/directives/counter.directive';
import { ClientLayoutModule } from './Layouts/client-layout/client-layout.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    FooterComponent,
    TeamComponent,
    PartiesComponent,
    ClientsComponent,
    CounterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClientLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
