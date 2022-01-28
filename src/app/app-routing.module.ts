import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { ClientLayoutComponent } from './Layouts/client-layout/client-layout.component';

const routes: Routes = [
  {path : 'accueil' , component: AccueilComponent},
  {
    path: 'client',
    loadChildren: () => import('./Layouts/client-layout/client-layout.module').then(m => m.ClientLayoutModule)
  },
  {path: '**' , component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
