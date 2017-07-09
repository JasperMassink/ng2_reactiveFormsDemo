import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressService } from './services/adress.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ AdressService ]
})
export class CoreModule { }
