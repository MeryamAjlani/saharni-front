import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { ClientLayoutComponent } from './Layouts/client-layout/client-layout.component';

const routes: Routes = [
  {path : 'accueil' , component: AccueilComponent},
  {path: '**' , component: AccueilComponent},
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
        ()=> import('./Layouts/client-layout/client-layout.module').then(m=> m.ClientLayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
