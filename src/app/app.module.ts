import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ChocoListComponent } from './choco-list/choco-list.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { RauchChocolatesComponent } from './rauch-chocolates/rauch-chocolates.component';
import { RauchContactComponent } from './rauch-contact/rauch-contact.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ChocoListComponent,
    RauchContactComponent,
    RauchChocolatesComponent,
    CarritoComponent,
    InputIntegerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
