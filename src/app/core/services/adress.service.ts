import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ContactModel } from '../../shared/models/contact.model';

@Injectable()
export class AdressService {

  private contacts: Array<ContactModel> = [
    {
      fullName: 'Jasper Massink',
      emailAdress: 'jasper.massink01@gmail.com',
      telephoneNumber: '06-12643934'
    },
      {
      fullName: 'Piet Saman',
      emailAdress: 'piet.saman@hotmail.com',
      telephoneNumber: '06-12123434'
    }
  ]

  constructor() { }

  getContacts() {
    return Observable.of(this.contacts);
  }

}
