import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CanDeactivateGuard } from 'src/app/core/auth/can-deactivate.guard';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      animation: 'customers'
    }
  },
  {
    path: 'detail/:id',
    component: CustomerDetailComponent,
    data: {
      animation: 'customer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
