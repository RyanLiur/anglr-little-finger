import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/feature/customers/customer-data/customer';
import { MessageService } from './message.service';

@Injectable()
export class CustomerService {
  private _CUS: Customer[] = [
    { id: 1, name: 'Windstorm'},
    { id: 2, name: 'Bombasto'},
    { id: 3, name: 'Magneta'},
    { id: 4, name: 'Tornado'},
  ];
  constructor(private messageService: MessageService) { }

  getCustomers(): Observable<Customer[]> {
    return of(this._CUS);
  }

  getCustomer(id: number): Observable<Customer> {
    // TODO: send the message _after_ fetching the customer
    this.messageService.add(`CustomerService: fetched customer id=${id}`);
    return of(this._CUS.find(el => el.id === id));
  }
}
