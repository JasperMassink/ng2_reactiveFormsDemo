import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  contactFormModel: FormGroup;

 
  constructor(
    private adressService: AdressService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm() {
    this.contactFormModel = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      emailAdress: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64), Validators.pattern(this.emailPattern)]]
    })
  }

  addContactHandler() {
    this.updateContacts();
  }

  cancelHandler() {
    this.closeForm(false);
  }

// Use object.assign() to create a postmodel
 updateContacts() {
    const postModel : ContactModel = Object.assign({}, new ContactModel(), this.contactFormModel.value)
    this.adressService.updateContacts(postModel)
      .subscribe(() => this.closeForm(true), (error) => console.log(error));
  }

  // updateContacts() {
  //   this.adressService.updateContacts(this.contactFormModel)
  //     .subscribe(() => this.closeForm(true), (error) => console.log(error));
  // }

  closeForm(updateContacts: boolean) {
    this.updateContactList.emit(updateContacts);
  }
}
