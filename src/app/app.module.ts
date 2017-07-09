import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdressBookComponent } from './adress-book/adress-book.component';
import { AddAdressComponent } from './adress-book/add-adress/add-adress.component';

@NgModule({
  declarations: [
    AppComponent,
    AdressBookComponent,
    AddAdressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
