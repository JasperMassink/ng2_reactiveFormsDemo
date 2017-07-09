import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

// Reactive forms building blocks.

import { FormGroup, FormControl } from '@angular/forms';
/*import { Form } from '@angular/forms'; */

import { AdressService } from '../../core/services/adress.service';
import { ContactModel } from '../../shared/models/contact.model'

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() updateContactList: EventEmitter<boolean> = new EventEmitter<boolean>();

  emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // contactFormModel: ContactModel = {
  //   firstName: '',
  //   lastName: '',
  //   emailAdress: ''
  // };

  contactFormModel: FormGroup;

  constructor(private adressService: AdressService) { }

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm(){
    this.contactFormModel = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    })

  }

  addContactHandler() {
    // this.updateContacts();
  }

  cancelHandler() {
    this.closeForm(false);
  }

  // updateContacts() {
  //   this.adressService.updateContacts(this.contactFormModel)
  //     .subscribe(() => this.closeForm(true), (error) => console.log(error));
  // }

  closeForm(updateContacts: boolean) {
    this.updateContactList.emit(updateContacts);
  }
}
