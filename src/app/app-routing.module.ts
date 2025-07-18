import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RauchChocolatesComponent } from './rauch-chocolates/rauch-chocolates.component';
import { RauchContactComponent } from './rauch-contact/rauch-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chocolates',
    pathMatch: 'full'
  },
  {
    path: 'chocolates',
    component: RauchChocolatesComponent
  },
  {
    path: 'about',
    component: RauchContactComponent
  },
  {
    path: 'login',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
