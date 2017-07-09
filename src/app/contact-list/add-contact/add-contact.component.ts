import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { AdressService } from '../../core/services/adress.service';
import { ContactModel } from '../../shared/models/contact.model'

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output()updateContactList: EventEmitter<boolean> = new EventEmitter<boolean>();

  contactFormModel: ContactModel = {
    firstName: '',
    lastName: '',
    emailAdress: ''
  };

  constructor(private adressService: AdressService) { }

  ngOnInit() {
  }

  addContactHandler() {
    this.updateContacts();
  }

  cancelHandler() {
    this.closeForm(false);
  }

  updateContacts() {
    this.adressService.updateContacts(this.contactFormModel)
      .subscribe(()=> this.closeForm(true) , (error) => console.log(error));
  }

  closeForm(updateContacts : boolean){
    this.updateContactList.emit(updateContacts); 
  }
}
