import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from 'src/app/Components/feed/feed.component';
import { ProfileComponent } from 'src/app/Components/profile/profile.component';
import { ClientLayoutComponent } from './client-layout.component';

export const ClientLayoutRoutes: Routes = [

  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'feed', component: FeedComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ClientLayoutRoutes)],
  exports: [RouterModule]
})

export class ClientLayoutRoutingModule {}
