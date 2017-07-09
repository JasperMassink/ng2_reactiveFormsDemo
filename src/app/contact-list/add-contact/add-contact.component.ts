import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { AdressService } from '../../core/services/adress.service';
import { ContactModel } from '../../shared/models/contact.model'

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() updateContactList: EventEmitter<boolean> = new EventEmitter<boolean>();

  displayedEmailValidationMessage: string;
  displayedFirstnameValidationMessage: string;
  displayedLastNameValidationMessage: string;

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private emailValidationMessages = {
    required: 'Please enter your email address',
    pattern: 'Please enter a valid email address'
  }

  private firstnameValidationMessages = {
    required: 'Please enter your first name',
    minLength: 'The first name must be longer than 3 characters'
  }

  private lastNameValidationMessages = {
    required: 'Please enter your last name',
    minLength: 'The last name must be longer than 3 characters'
  }

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
      emailAddress: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64), Validators.pattern(this.emailPattern)]]
    })

    const emailControl = this.contactFormModel.get('emailAddress');
    // Debounce time reactive transformation added
    emailControl.valueChanges.debounceTime(1000).subscribe(value => this.setEmailValidationMessage(emailControl));
    //  emailControl.valueChanges.subscribe(value => this.setEmailValidationMessage(emailControl));
  }

  setEmailValidationMessage(control: AbstractControl) {
    this.displayedEmailValidationMessage = '';
    if ((control.touched || control.dirty) && control.errors) {
      this.displayedEmailValidationMessage = Object.keys(control.errors).map(key =>
        this.emailValidationMessages[key]).join('');
    }
  }

  addContactHandler() {
    this.updateContacts();
  }

  cancelHandler() {
    this.closeForm(false);
  }

  updateContacts() {
    const postModel: ContactModel = Object.assign({}, new ContactModel(), this.contactFormModel.value)
    this.adressService.updateContacts(postModel)
      .subscribe(() => this.closeForm(true), (error) => console.log(error));
  }

  closeForm(updateContacts: boolean) {
    this.updateContactList.emit(updateContacts);
  }
}
