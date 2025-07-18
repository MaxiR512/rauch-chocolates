import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ChocoListComponent } from './choco-list/choco-list.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { RauchChocolatesComponent } from './rauch-chocolates/rauch-chocolates.component';
import { RauchContactComponent } from './rauch-contact/rauch-contact.component';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChocoListComponent,
    RauchContactComponent,
    RauchChocolatesComponent,
    CarritoComponent,
    InputIntegerComponent,
    EliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
