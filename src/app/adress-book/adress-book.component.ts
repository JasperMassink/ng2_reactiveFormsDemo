import { Component, OnInit } from '@angular/core';
import { AdressService } from '../core/services/adress.service';
import { Observable } from 'rxjs';

import { ContactModel } from '../shared/models/contact.model'

@Component({
  selector: 'app-adress-book',
  templateUrl: './adress-book.component.html',
  styleUrls: ['./adress-book.component.css']
})
export class AdressBookComponent implements OnInit {

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
    ;


  }

}
