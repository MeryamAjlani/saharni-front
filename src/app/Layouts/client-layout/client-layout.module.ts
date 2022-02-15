import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/Components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { ClientLayoutRoutes, ClientLayoutRoutingModule } from './client-layout-routing.module';
import { ClientLayoutComponent } from './client-layout.component';
import { PartyCardComponent } from 'src/app/Components/party-card/party-card.component';
import { FeedComponent } from 'src/app/Components/feed/feed.component';



@NgModule({
  declarations: [
    ClientLayoutComponent,
    ProfileComponent,
    PartyCardComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    ClientLayoutRoutingModule
  ]
})
export class ClientLayoutModule { }
