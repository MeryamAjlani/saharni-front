import { Routes } from "@angular/router";
import { ProfileComponent } from "src/app/Components/profile/profile.component";
import { ClientLayoutComponent } from "./client-layout.component";
export const ClientLayoutRoutes: Routes = [
    
  {
    path: 'client', 
    component: ClientLayoutComponent ,
    children:[
      {
      path: 'profile',
      component: ProfileComponent
      },
    ]
  }
]