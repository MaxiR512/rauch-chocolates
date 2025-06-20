import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocoListComponent } from './choco-list/choco-list.component';
import { RauchContactComponent } from './rauch-contact/rauch-contact.component';
import { RauchChocolatesComponent } from './rauch-chocolates/rauch-chocolates.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChocoListComponent,
    RauchContactComponent,
    RauchChocolatesComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
