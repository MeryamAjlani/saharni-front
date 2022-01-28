import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/Components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { ClientLayoutRoutes } from './client-layout-routing.module';



@NgModule({
  declarations: [ 
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes)
  ]
})
export class ClientLayoutModule { }
