import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
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
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: 'eliminar',
    component: EliminarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
