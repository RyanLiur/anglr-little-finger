import { ConfirmService } from './../../../core/service/confirm.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable, EMPTY } from 'rxjs';
import { Customer } from '../customer-data/customer';
import { CustomerService } from 'src/app/core/service/customer.service';
import { CanComponentDeactivate } from 'src/app/core/auth/can-deactivate.guard';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, CanComponentDeactivate {

  paymentForm: FormGroup;
  cardNumberSub: Subscription;
  customers: Customer[];
  customerId: number;
  beforeId: number;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private confirmService: ConfirmService) {

  }

  ngOnInit(): void {
    if (this.route.params) {
      const param: any = this.route.params;
      this.beforeId = +param?.value?.id;
    }
    // TODO paramMap return observable of null. why?
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.beforeId = +params.get('id');
    //     return params.get('id');
    //   })
    // );
    this.initForm();
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });

    this.cardNumberSub = this.paymentForm.get('cardNumber').valueChanges.subscribe(
      val => {
        const numString = this.numberChanger(val);
        this.paymentForm.patchValue(
          { cardNumber: numString },
          { emitEvent: false }
        );
        this.cd.detectChanges();
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    const cardNum = this.paymentForm.get('cardNumber');
    // Allow synchronous navigation (`true`) if the form is unchanged or empty.
    if (!cardNum.dirty || cardNum.value === '') {
      return true;
    }
    return this.confirmService.confirm('Discard changes?');
  }

  initForm() {
    this.paymentForm = this.fb.group(
      {
        cardNumber: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(19),
            Validators.pattern('^[0-9 ]*$')
          ])
        ]
      }
    );
  }

  /**
   * hold only number
   * @param value input string
   */
  numberChanger(value: string) {
    return value.replace(/\s+/gi, '').replace(/[^0-9]/gi, '');
  }

  selectCustomer(e, id: number) {
    console.log(`id: ${id}`);
    this.customerId = e.target.checked ? id : undefined;
  }

  selCustomer(e) {
    console.log('`id: ${id}`');
    // this.customerId = e.target.checked ? id : undefined;
  }

  toDetail() {
    if (this.customerId) {
      this.router.navigate(['customers/detail', this.customerId]);
      // 相对路径跳转
      // this.router.navigate(['detail', this.customerId], { relativeTo: this.route });
    }
  }
}
