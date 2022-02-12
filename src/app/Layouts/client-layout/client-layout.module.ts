import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/Components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { ClientLayoutRoutes, ClientLayoutRoutingModule } from './client-layout-routing.module';
import { ClientLayoutComponent } from './client-layout.component';



@NgModule({
  declarations: [
    ClientLayoutComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    ClientLayoutRoutingModule
  ]
})
export class ClientLayoutModule { }
