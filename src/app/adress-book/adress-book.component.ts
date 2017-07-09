import { Component, OnInit, ViewChild } from '@angular/core';
import { AdressService } from '../core/services/adress.service';
import { Observable } from 'rxjs';

import { ContactModel } from '../shared/models/contact.model';
import { AddAdressComponent } from './add-adress/add-adress.component';

@Component({
  selector: 'app-adress-book',
  templateUrl: './adress-book.component.html',
  styleUrls: ['./adress-book.component.css']
})
export class AdressBookComponent implements OnInit {

  showAddForm = false;
  contacts: Array<ContactModel>;

  @ViewChild(AddAdressComponent) addAdressComponent: AddAdressComponent;

  constructor(private adressService: AdressService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.adressService.getContacts()
      .subscribe((data) => this.contacts = data),
      (error) => console.log(error);

  }
  updateContactFromAddAdress(updateContacts: boolean) {
    if (updateContacts) {
      this.adressService.getContacts()
        .subscribe((data) => {
          this.contacts = data;
          this.showAddForm = false;
        }),
        (error) => console.log(error);
    } else {
      this.showAddForm = false;
    }
  }

}
