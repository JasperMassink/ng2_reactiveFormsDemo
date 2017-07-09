import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { AdressService } from '../../core/services/adress.service';
import { ContactModel } from '../../shared/models/contact.model'

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-adress.component.html',
  styleUrls: ['./add-adress.component.css']
})
export class AddAdressComponent implements OnInit {

  @Output()updateContactList: EventEmitter<boolean> = new EventEmitter<boolean>();

  contactFormModel: ContactModel = {
    fullName: '',
    emailAdress: '',
    telephoneNumber: ''
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
