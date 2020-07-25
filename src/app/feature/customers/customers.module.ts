import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PaymentCardNumberPipe } from 'src/app/shared/payment-card-number.pipe';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerService } from 'src/app/core/service/customer.service';


@NgModule({
  declarations: [
    CustomerListComponent,
    PaymentCardNumberPipe,
    CustomerDetailComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CustomerService]
})
export class CustomersModule { }
