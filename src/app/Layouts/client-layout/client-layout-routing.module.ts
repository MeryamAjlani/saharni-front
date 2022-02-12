import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/app/Components/profile/profile.component';
import { ClientLayoutComponent } from './client-layout.component';

export const ClientLayoutRoutes: Routes = [

  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ClientLayoutRoutes)],
  exports: [RouterModule]
})

export class ClientLayoutRoutingModule {}
