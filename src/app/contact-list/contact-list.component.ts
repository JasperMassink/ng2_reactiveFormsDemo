import { Component, OnInit, ViewChild } from '@angular/core';
import { AdressService } from '../core/services/adress.service';
import { Observable } from 'rxjs';

import { ContactModel } from '../shared/models/contact.model';


@Component({
  selector: 'app-adress-book',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  showAddForm = false;
  contacts: Array<ContactModel>;

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
